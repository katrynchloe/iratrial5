export type Listener<TState> = (state: Readonly<TState>) => void;

export default class WithState<TState extends {}> {
  private state: TState;
  private listener: Listener<TState>;

  constructor(listener: Listener<TState>, state: TState) {
    this.listener = listener;
    this.state = state;

    this.triggerListener();
  }

  protected getState(): TState {
    return this.state;
  }

  protected setState(state: Partial<TState>): void {
    this.state = Object.assign({}, this.state, state);
    this.triggerListener();
  }

  private triggerListener(): void {
    try {
      this.listener(this.state);
    } catch (e) {
      setImmediate(() => {
        throw e;
      });
    }
  }
}
