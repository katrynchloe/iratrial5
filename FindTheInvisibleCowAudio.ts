import WithState, { Listener } from "./WithState";
import { AnimalKey, AnimalsArray, AnimalsMap } from "../animals";
import loadAudio, { Sound } from "./loadAudio";
import nullthrows from "./nullthrows";
import "array-flat-polyfill";

enum AudioFormat {
  mp3 = "mp3",
  ogg = "ogg",
}

export interface State {
  loaded: boolean;
  progress: number;
  format: AudioFormat | null;
}

export interface StrictState extends State {
  format: AudioFormat;
}

export const defaultState: State = {
  loaded: false,
  progress: 0,
  format: getFormat(),
};

type Level = number | "win";

export default class FindTheInvisibleCowAudio extends WithState<StrictState> {
  context: AudioContext;
  sounds: Sound[] | undefined;

  constructor(listener: Listener<State>, state = defaultState) {
    const { format } = state;
    const AudioContext = window.AudioContext ?? window.webkitAudioContext;
    if (!format || !AudioContext) {
      throw new Error("Audio unsupported");
    }

    super(listener, {
      ...state,
      format,
    });

    this.context = new AudioContext();
    this.load();
  }

  async play(animalKey: AnimalKey, level: Level): Promise<void> {
    if (this.sounds == null) {
      throw new Error("Sounds not loaded");
    }

    const { format } = this.getState();
    const animal = nullthrows(AnimalsMap.get(animalKey));
    const path = getAudioPath(animalKey, level, format);
    const sound = this.sounds.filter((s) => s.path === path)[0];

    const source = this.context.createBufferSource();
    source.buffer = sound.buffer;
    source.connect(this.context.destination);
    source.start(0);

    await wait(animal.audioDuration);
  }

  private async load(): Promise<void> {
    const { format } = this.getState();

    const paths = AnimalsArray.map((animal) => {
      const levels: Level[] = Array.from(
        { length: animal.maxLevel + 1 },
        (_: null, level: number) => level,
      );
      levels.push("win");

      return levels.map((level) => getAudioPath(animal.key, level, format));
    }).flat();

    const sounds = await loadAudio(paths, this.context, (progress: number) => {
      this.setState({ progress });
    });

    this.sounds = sounds;
    this.setState({ loaded: true, progress: 1 });
  }
}

function getFormat(): AudioFormat | null {
  const hasAudioContext = window.AudioContext || window.webkitAudioContext;
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (iOS || !hasAudioContext) {
    return null;
  }

  try {
    const a = document.createElement("audio");
    const mp3Support =
      typeof a.canPlayType === "function" && a.canPlayType("audio/mpeg") !== "";
    return mp3Support ? AudioFormat.mp3 : AudioFormat.ogg;
  } catch (e) {
    return null;
  }
}

function getAudioPath(
  animalKey: AnimalKey,
  level: Level,
  audioFormat: AudioFormat,
): string {
  return `${process.env.PUBLIC_URL}/sound/${animalKey}/${level}.${audioFormat}`;
}

declare global {
  interface Window {
    webkitAudioContext: AudioContext;
  }
}

function wait(t: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}
