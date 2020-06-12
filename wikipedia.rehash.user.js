// ==UserScript==
// @name         wikipedia.rehash
// @namespace    krasjet
// @version      1.2.0
// @description  A minimal typographic rehash of Wikipedia designed for better screen readability.
// @author       Krasjet
// @homepageURL  https://github.com/Krasjet/wikipedia.rehash
// @match        *://*.wikipedia.org/*
// @match        *://*.wikibooks.org/*
// @match        *://*.mediawiki.org/*
// @match        *://*.wiktionary.org/*
// @grant        none
// ==/UserScript==
(function() {
  "use strict";
  let body = document.getElementsByTagName("body")[0];
  let marginLeft = window.getComputedStyle(body).getPropertyValue("margin-left");

  window.addEventListener("resize", () => {
    marginLeft = window.getComputedStyle(body).getPropertyValue("margin-left");
  });

  let callback = function(mutList) {
    for (let mut of mutList) {
      let mutNode = mut.addedNodes;
      if (mutNode.length !== 0 && (mutNode[0].classList.contains("mwe-popups")
          || mutNode[0].classList.contains("rt-tooltip"))) {
        let eleLeft = mutNode[0].style.left;
        // subtract the left margin from the computed value
        mutNode[0].style.left = "calc(" + eleLeft + " - " + marginLeft + ")";
      }
    }
  };
  let observer = new MutationObserver(callback);
  observer.observe(body, { childList: true });
})();
