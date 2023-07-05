import track from "./track";
import FindTheInvisibleCowApi from "./FindTheInvisibleCowApi";
import FindTheInvisibleCowAudio, {
  State as AudioState,
  defaultState as defaultAudioState,
} from "./FindTheInvisibleCowAudio";
import WithState, { Listener } from "./WithState";
import { Animal, AnimalKey, AnimalsMap } from "../animals";
import nullthrows from "./nullthrows";

export enum Page {
  Welcome = "Welcome",
  Game = "Game",
  Congratulations = "Congratulations",
  Unsupported = "Unsupported",
}

export enum GameState {
  Searching = "Searching",
  Hover = "Hover",
  Found = "Found",
  Centered = "Centered",
  Moo = "Moo",
  Afterglow = "Afterglow",
}

type Game = Readonly<InactiveGame | ActiveGame>;

type InactiveGame = Readonly<{
  page: Page.Welcome | Page.Congratulations | Page.Unsupported;
}>;

export type ActiveGame = Readonly<{
  page: Page.Game;
  relativeAnimalPos: Position;
  state: GameState;
}>;

export type Position = [number, number];

export type State = {
  animalKey: AnimalKey;
  audio: AudioState;
  expertMode: boolean;
  game: Game;
  globalPoints: number | undefined;
  points: number;
};

export const defaultState: State = {
  animalKey: AnimalKey.Cow,
  audio: defaultAudioState,
  expertMode: false,
  game: { page: Page.Welcome },
  globalPoints: undefined,
  points: 0,
};

export default class FindTheInvisibleCow extends WithState<State> {
  private api: FindTheInvisibleCowApi = new FindTheInvisibleCowApi();
  private audio: FindTheInvisibleCowAudio | undefined;
  private cursorPos: Position = [-1, -1];
  private findRadius: number = 40;

  constructor(listener: Listener<State>, state: State = defaultState) {
    super(listener, state);

    try {
      this.audio = new FindTheInvisibleCowAudio((audio) =>
        this.setState({ audio }),
      );
    } catch (e) {
      console.error(123);
      console.error(e);
      this.setState({ game: { page: Page.Unsupported } });
    }

    // Global points
    this.api.getGlobalPoints().then((globalPoints) => {
      this.setState({ globalPoints });
    });

    document.addEventListener("mousemove", this.pointerMove.bind(this));
    document.addEventListener("touchmove", this.pointerMove.bind(this), {
      passive: false,
    });
    document.addEventListener("mousedown", this.pointerDown.bind(this));
  }

  play(): void {
    track("Cow", "gameStart", this.getState().animalKey);

    this.setState({
      game: {
        page: Page.Game,
        relativeAnimalPos: [Math.random(), Math.random()],
        state: GameState.Searching,
      },
    });

    this.playSound();
  }

  setAnimal(animalKey: AnimalKey): void {
    this.setState({ animalKey });
  }

  setExpertMode(expertMode: boolean): void {
    this.setState({ expertMode });
  }

  private getActiveGame(): ActiveGame | null {
    const { game } = this.getState();
    return game.page === Page.Game ? game : null;
  }

  private pointerMove(e: MouseEvent | TouchEvent): void {
    const pos = e instanceof MouseEvent ? e : e.touches[0];
    this.cursorPos = [pos.clientX, pos.clientY];

    const game = this.getActiveGame();
    if (game === null || !this.isPlaying()) {
      return;
    }

    const distance = this.getCursorDistance();
    const state =
      distance < this.findRadius ? GameState.Hover : GameState.Searching;

    if (state !== game.state) {
      this.setState({ game: { ...game, state } });
    }

    if (!(e instanceof MouseEvent)) {
      e.preventDefault();
      this.pointerDown();
    }
  }

  private pointerDown(): void {
    const game = this.getActiveGame();
    if (game !== null && game.state === GameState.Hover) {
      this.onFound();
    }
  }

  private onFound(): void {
    const { animalKey, points } = this.getState();
    const animal = this.getAnimal();
    const game = this.getActiveGame();

    if (game === null) {
      return;
    }

    this.setState({ game: { ...game, state: GameState.Found } });
    setTimeout(
      () => this.setState({ game: { ...game, state: GameState.Centered } }),
      100,
    );
    setTimeout(() => {
      this.setState({ game: { ...game, state: GameState.Moo } });
      this.audio?.play(animalKey, "win");
    }, animal.winSoundDelay);
    setTimeout(
      () => this.setState({ game: { ...game, state: GameState.Afterglow } }),
      1400,
    );
    setTimeout(() => {
      this.setState({
        game: { page: Page.Congratulations },
        points: points + 1,
      });
      this.api.incrementGlobalPoints().then((globalPoints) => {
        this.setState({ globalPoints });
      });
    }, 2400);
  }

  private async playSound(): Promise<void> {
    if (!this.isPlaying()) {
      return;
    }
    const level = this.getLevel();
    await this.audio?.play(this.getState().animalKey, level);
    await this.playSound();
  }

  private isPlaying(): boolean {
    const game = this.getActiveGame();
    return (
      game !== null &&
      [GameState.Searching, GameState.Hover].includes(game.state)
    );
  }

  private getCursorDistance(): number {
    const game = this.getActiveGame();
    if (game === null) {
      return Infinity;
    }

    const animalPos: Position = [
      game.relativeAnimalPos[0] * window.innerWidth,
      game.relativeAnimalPos[1] * window.innerHeight,
    ];

    return Math.sqrt(
      (this.cursorPos[0] - animalPos[0]) ** 2 +
        (this.cursorPos[1] - animalPos[1]) ** 2,
    );
  }

  private getAnimal(): Animal {
    return nullthrows(AnimalsMap.get(this.getState().animalKey));
  }

  private getLevel(): number {
    const animal = this.getAnimal();
    const distance = this.getCursorDistance();

    const maxDistance = Math.sqrt(
      window.innerWidth ** 2 + window.innerHeight ** 2,
    );
    const maxLevel = animal.maxLevel;

    const distanceRatio =
      1 - Math.min(maxDistance, Math.max(0, distance)) / maxDistance;
    const scaledRatio = (Math.exp(distanceRatio) - 1) / (Math.E - 1);
    return Math.floor(scaledRatio * maxLevel);
  }
}
