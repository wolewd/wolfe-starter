import { WolComponent, html, define } from "wolfe";

@define("not-found")
export class PageNotFound extends WolComponent {
  protected render() {
    return html`
      <div class="page">
        <div class="card">
          <span class="card_heading">404</span>
          <p class="card_label">page not found</p>
          <a class="btn" href="/">← home</a>
        </div>
      </div>
    `;
  }
}
