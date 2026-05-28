import { WolComponent, html, define } from "wolfe";

@define("not-found")
export class PageNotFound extends WolComponent {
  protected render() {
    return html`
      <div class="min-h-screen flex items-center justify-center px-6">
        <div class="text-center max-w-md font-mono">
          <div class="text-7xl font-bold text-white mb-4">404</div>
          <p class="text-2xl font-semibold text-white mb-2">Page Not Found</p>
          <p class="text-white mb-6">The page you're looking for doesn't exist or has been moved.</p>
          <div class="flex gap-3 justify-center">
            <a href="/" class="px-5 py-2 rounded-lg text-white font-semibold border border-slate-600 hover:bg-green-500 hover:border-green-500 active:scale-95 transition-all">Home</a>
          </div>
        </div>
      </div>
    `;
  }
}
