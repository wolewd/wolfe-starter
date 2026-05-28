import { WolComponent, html, define, subscribe } from "wolfe";
import { themeStore, toggleTheme } from "../stores/themeStore.ts";

@define("theme-toggle")
export class ThemeToggle extends WolComponent {
  @subscribe(themeStore)
  state = themeStore.getState;

  protected render() {
    const label = this.state.dark ? "light" : "dark";

    return html`
      <button class="btn theme-toggle" @click=${toggleTheme}>
        ${label}
      </button>
    `;
  }
}
