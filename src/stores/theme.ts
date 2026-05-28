import { Store } from "wolfe";

export const themeStore = new Store(
  { dark: false },
  { persist: "theme" }
);

export const toggleTheme = () => {
  themeStore.setState((prev) => ({ dark: !prev.dark }));
  console.log(themeStore.getState);
};
