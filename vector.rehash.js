// wikipedia.rehash 0.3.1
//  - Krasjet
// A minimal typographic rehash of Wikipedia aimed at better screen readability.
// homepage: https://github.com/Krasjet/wikipedia.rehash
$(document).ready(function() {
  var body = document.getElementsByTagName("body")[0];
  var callback = function(mutList, _obs) {
    var mut = mutList[0];
    var mutNode = mut.addedNodes;
    if (mutNode.length !== 0 && mutNode[0].classList.contains("mwe-popups")) {
      var eleLeft = mutNode[0].style.left;
      var marginLeft = window.getComputedStyle(body).getPropertyValue("margin-left");
      // subtract the left margin from the computed value
      mutNode[0].style.left = "calc(" + eleLeft + " - " + marginLeft + ")";
    }
  };
  var observer = new MutationObserver(callback);
  observer.observe(body, { childList: true });
});
