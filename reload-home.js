(function () {
  var navigation = performance.getEntriesByType("navigation")[0];
  var isReload = navigation && navigation.type === "reload";

  if (!isReload) {
    return;
  }

  var homeUrl = new URL("index.html", window.location.href);
  var currentUrl = new URL(window.location.href);

  if (currentUrl.pathname !== homeUrl.pathname || currentUrl.hash) {
    window.location.replace(homeUrl.href);
  }
})();
