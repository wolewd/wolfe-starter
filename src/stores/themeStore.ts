import { Store } from "wolfe";
import { bodyClass } from "wolfe/utils";

export const themeStore = new Store(
  { dark: false },
  { persist: "theme" }
);

themeStore.subscribe(({ dark }) => {
  bodyClass({ dark, light: !dark });
  console.log(themeStore.getState)
});

export const toggleTheme = () => {
  themeStore.setState((prev) => ({ dark: !prev.dark }));
};
