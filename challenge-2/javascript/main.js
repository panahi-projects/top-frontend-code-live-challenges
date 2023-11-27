"use strict";

import "./style.css";

(function () {
  console.log("Debounce Test");

  const MOCK_DATA = ["mp3", "mp4", "avi", "mkv", "exe", "mpeg", "jpg"];

  const debounce = (callback, delay) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const search = document.querySelector("#search");
  const ul = document.querySelector("ul");

  const debouncedHandledInput = debounce((event) => {
    ul.innerHTML = ''
    console.log("event.target.value", event.target.value);
    let result = MOCK_DATA.filter((x) => {
      if(x.includes(event.target.value)) return x
    });
    if (result?.length) {
      console.log("result",result);
      for (const item of result) {
        let newLi = document.createElement("li");
        newLi.innerText = item;

        ul.appendChild(newLi)
      }
    }
  }, 600);

  search.addEventListener("input", debouncedHandledInput);
})();
