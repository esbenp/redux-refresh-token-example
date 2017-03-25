/*
Provides fallback for clients without localStorage
*/

const fallback = method => {
  return (...args) => {
    if (window.localStorage) {
      return window.localStorage[method].apply(window.localStorage, args);
    }

    return null;
  };
};

export default {
  clear: fallback("clear"),
  getItem: fallback("getItem"),
  removeItem: fallback("removeItem"),
  setItem: fallback("setItem")
};
