import { Store } from "wolfe";
import { bodyClass } from "wolfe/utils";

export const themeStore = new Store(
  { dark: false },
  { persist: "theme" }
);

export const applyTheme = (dark: boolean) => {
  bodyClass({ dark, light: !dark });
};

export const toggleTheme = () => {
  themeStore.setState((prev) => ({ dark: !prev.dark }));
  applyTheme(themeStore.getState.dark);
  console.log(themeStore.getState);
};
