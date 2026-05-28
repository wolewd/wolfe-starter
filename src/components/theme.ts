import { WolComponent, html, define, subscribe } from "wolfe";
import { themeStore, toggleTheme } from "../stores/theme.ts";

@define("theme-toggle")
export class ThemeToggle extends WolComponent {
  @subscribe(themeStore)
  state = themeStore.getState;

  protected onMount() {
    themeStore.subscribe((s) => {
      document.body.className = s.dark ? "dark" : "light";
    });
  }

  protected render() {
    return html`
      <button class="btn theme-toggle" @click=${toggleTheme}>
        ${this.state.dark ? "light" : "dark"}
      </button>
    `;
  }
}
