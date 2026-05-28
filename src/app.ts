import { router } from "wolfe";
import { themeStore } from "./stores/theme.ts";

import "./components/theme.ts";

import "./pages/home.ts";
import "./pages/404.ts";

const saved = themeStore.getState;
document.body.className = saved.dark ? "dark" : "light";

router
  .add({ path: "/", tag: "app-home", title: "Home" })
  .missing({ tag: "not-found", title: "404" })
  .init({
    outlet: document.getElementById("app")!,
    appName: document.getElementById("app-name")?.textContent ?? "Wolfe App",
  });
