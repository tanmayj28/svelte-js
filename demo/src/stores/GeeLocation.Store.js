import { readable } from 'svelte/store';
export default readable(
  {lat: undefined, long: undefined, location: false, errMsg: undefined},
  (set) => {
    let id;
    let options;

    function success(pos) {
      const crd = pos.coords;

      set({
        lat: crd.latitude,
        long: crd.longitude,
        location: true,
        errMsg: undefined
      });
    }

    function error(err) {
      set({
        lat: undefined,
        long: undefined,
        location: false,
        errMsg: err.message
      });
    }

    options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    id = navigator.geolocation.watchPosition(success, error, options);
  }
);
