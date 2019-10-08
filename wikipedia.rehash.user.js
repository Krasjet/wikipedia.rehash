// ==UserScript==
// @name         wikipedia.rehash
// @namespace    krasjet
// @version      0.3.1
// @description  A minimal typographic rehash of Wikipedia aimed at better screen readability.
// @author       Krasjet
// @homepageURL  https://github.com/Krasjet/wikipedia.rehash
// @match        *://*.wikipedia.org/*
// @match        *://*.wikibooks.org/*
// @match        *://*.mediawiki.org/*
// @match        *://*.wiktionary.org/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let body = document.getElementsByTagName("body")[0];
    let callback = function(mutList, _obs) {
        for (let mut of mutList) {
            let mutNode = mut.addedNodes;
            if (mutNode.length !== 0 && mutNode[0].classList.contains("mwe-popups")) {
                let eleLeft = mutNode[0].style.left;
                let marginLeft = window.getComputedStyle(body).getPropertyValue("margin-left");
                // subtract the left margin from the computed value
                mutNode[0].style.left = "calc("+ eleLeft + " - "+ marginLeft + ")";
            }
        }
    };
    let observer = new MutationObserver(callback);
    observer.observe(body, { childList: true });
})();
