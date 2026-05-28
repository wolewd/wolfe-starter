import { router } from "wolfe";
import { el, text } from "wolfe/utils";

import { themeStore, applyTheme } from "./stores/themeStore.ts";

import "./components/theme.ts";
import "./pages/home.ts";
import "./pages/404.ts";

applyTheme(themeStore.getState.dark);

const outlet = el("app");
const appName = text("app-name") || "Wolfe App";

router.add({ path: "/", tag: "app-home", title: "Home" });
router.missing({ tag: "not-found", title: "404" });
router.init({ outlet, appName });
