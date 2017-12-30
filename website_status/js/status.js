function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      callback(true);
    }
  };
  xhr.onerror = function() {
    callback(false);
  };
  xhr.send();
}

function checkStatus() {
  httpRequest("https://api.github.com/users/district10", function(status) {
    chrome.browserAction.setIcon({
      path: "images/" + (status ? "online.png" : "offline.png")
    });
    setTimeout(checkStatus, 5000);
  });
}

checkStatus();
