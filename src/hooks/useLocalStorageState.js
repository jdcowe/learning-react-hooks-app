import { useState, useEffect } from "react";

function UseLocalStorageState(key, defaultVal) {
  // make state, based off of value in local storage (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      val = defaultVal;
    }

    return val;
  });

  // use useEffect to update local storage when state changes
  useEffect(
    key => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [state]
  );

  return [state, setState];
}

export default UseLocalStorageState;
