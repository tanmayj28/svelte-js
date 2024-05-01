import { writable, derived } from 'svelte/store';

export const storeOne = writable(1);
export const storeTwo = writable(2);

export const storeSumEven = derived(
  [storeOne, storeTwo],
  ([oneVal, twoVal]) => {
    return (oneVal + twoVal) % 2 === 0;
  }
);

export const storeOneEven = derived(storeOne, (storeOneVal, set) => {
  set(storeOneVal % 2 === 0);
});
