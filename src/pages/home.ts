import { WolComponent, html, define, subscribe } from "wolfe";
import { counterStore, increment, decrement, reset } from "../stores/counter.ts";

@define("app-home")
export class PageHome extends WolComponent {
  @subscribe(counterStore)
  state = counterStore.getState;

  protected render() {
    return html`
      <div class="page">
        <div class="card">
          <span class="card_label">Hello Wolfe!</span>
          <span class="card_heading">${this.state.count}</span>
          <div class="btn-group">
            <button class="btn" @click=${increment}>+</button>
            <button class="btn" @click=${decrement}>−</button>
            <button class="btn" @click=${reset}>reset</button>
          </div>
        </div>
      </div>
    `;
  }
}
