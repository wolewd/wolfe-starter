import { router } from "wolfe";

import "./pages/home.ts";
import "./pages/404.ts";

const root = document.getElementById("app")!;
const appName = document.getElementById("app-name")?.textContent ?? "Wolfe App";

router
  .add("/", () => {
    document.title = `${appName} - Hello`;
    root.innerHTML = `<app-home></app-home>`;
  })
  .missing(() => {
    document.title = `${appName} - 404`;
    root.innerHTML = `<not-found></not-found>`;
  })
  .init();
