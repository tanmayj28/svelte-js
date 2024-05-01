import { readable } from 'svelte/store';
export default readable(
  {lat: undefined, long: undefined, location: false},
  (set) => {}
);
