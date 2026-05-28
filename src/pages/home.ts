import { WolComponent, html, define, subscribe } from "wolfe";
import { counterStore, increment, decrement, reset } from "../stores/counter.ts";

@define("app-home")
export class PageHome extends WolComponent {
  @subscribe(counterStore)
  state = counterStore.getState;

  protected render() {
    return html`
      <div class="min-h-screen flex items-center justify-center font-mono">
        <div class="flex flex-col items-center gap-6 p-10 rounded-2xl border border-slate-700 bg-slate-800 shadow-xl">
          <p class="text-slate-400 text-sm font-medium tracking-widest uppercase">WolFe Counter</p>
          <p class="text-white text-6xl font-bold">${this.state.count}</p>
          <div class="flex gap-3">
            <button class="px-5 py-2 rounded-lg text-white font-semibold border border-slate-600 hover:bg-green-500 hover:border-green-500 active:scale-95 transition-all" @click=${increment}>+</button>
            <button class="px-5 py-2 rounded-lg text-white font-semibold border border-slate-600 hover:bg-red-500 hover:border-red-500 active:scale-95 transition-all" @click=${decrement}>−</button>
            <button class="px-5 py-2 rounded-lg text-white font-semibold border border-slate-600 hover:bg-blue-500 hover:border-blue-500 active:scale-95 transition-all" @click=${reset}>reset</button>
          </div>
        </div>
      </div>
    `;
  }
}
