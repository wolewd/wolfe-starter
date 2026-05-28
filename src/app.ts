import { router } from "wolfe";

import "./pages/home.ts";
import "./pages/404.ts";

router
  .add({ path: "/", tag: "app-home", title: "Home" })
  .missing({ tag: "not-found", title: "404" })
  .init({
    outlet: document.getElementById("app")!,
    appName: document.getElementById("app-name")?.textContent ?? "Wolfe App",
  });
