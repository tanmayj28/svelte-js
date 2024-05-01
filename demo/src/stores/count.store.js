import { writable } from 'svelte/store';

const store = writable(1);

export default {
  subscribe: store.subscribe,
  addToStore: () => {
    store.update(n => n + 1);
  },
  subtractFromStore: () => {
    store.update(n => n - 1);
  },
  reset: () => {
    store.set(0);
  }
}
