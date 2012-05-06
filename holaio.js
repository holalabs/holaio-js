/* HolaIO Javascript library | github.com/holalabs/holaio-js/blob/master/LICENSE.txt */

HolaIO = function(key) {
  this.key = key;
  this.serverurl = "https://api.holalabs.com/io/";
  this.doRequest = function(url, callback) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open("GET", url, true);
    } else if (typeof XDomainRequest != "undefined"){
      xhr = new XDomainRequest();
      xhr.open("GET", url);
    } else {
      xhr = null;
      callback(418, null);
    }
    xhr.setRequestHeader("X-Api-Key", this.key);
    xhr.setRequestHeader("X-Api-Version", "1.0.0");
    xhr.onload = function() {
      callback(xhr.status, JSON.parse(xhr.responseText));
    }
    xhr.onerror = function() {
      // Cause I'm a teapot
      callback(418, null);
    }
    xhr.send(null);
  }
  this.decodeHtmlEntities = function (str) {
    return String(str).replace(/&amp;/ig, '&').replace(/&lt;/ig, '<').replace(/&gt;/ig, '>').replace(/&quot;/ig, '"');
  }
  this.get = function(url, selector, inner, cache, callback) {
    url = encodeURIComponent(url);
    selector = encodeURIComponent(escape(this.decodeHtmlEntities(selector)));
    var apiurl = this.serverurl + url + "/" + selector + "/" + inner;
    if(cache == true) {
      var data = sessionStorage.getItem(apiurl);
      if ('undefined' !== typeof data && data !== null) {
        callback(null, JSON.parse(data));
        return;
      } else {
        var origCallback = callback;
        callback = function(err, json) {
          if (err < 300)
            sessionStorage.setItem(apiurl, JSON.stringify(json));
          origCallback(err, json);
          return;
        }
      }
    }
    this.doRequest(apiurl, callback);
  }
}