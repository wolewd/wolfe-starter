import { Store } from "wolfe";

export const counterStore = new Store({ count: 0 });

export const increment = () => {
  counterStore.setState((prev) => ({ count: prev.count + 1 }));
  console.log(counterStore.getState);
};

export const decrement = () => {
  counterStore.setState((prev) => ({ count: prev.count - 1 }));
  console.log(counterStore.getState);
};

export const reset = () => {
  counterStore.setState({ count: 0 });
  console.log(counterStore.getState);
};
