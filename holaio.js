/* HolaIO Javascript library | github.com/holalabs/holaio-js/blob/master/LICENSE */

HolaIO = function(key) {
  this.key = key;
  var serverurl = "https://api.io.holalabs.com/";
  // Insert the script dinamically using JSONP
  insertScript = function(url) {
    var script = document.createElement("script");
    script.setAttribute("type","text/javascript")
    script.setAttribute("src", url);
    if (typeof script != "undefined");
      document.getElementsByTagName("head")[0].appendChild(script);
  }
  // Implement a function that does nothing to omit errors
  nothing = function() {}
  this.login = function() {
    var authurl = serverurl + "/login/" + this.key + "?jsonp=nothing";
    insertScript(authurl);
  }
  this.login();
  this.get = function(url, selector, inner, callbackfunc) {
    url = encodeURI(url);
    selector = encodeURI(selector);
    if (inner != "inner" && inner != "outer") {
      return false;
    }
    var apiurl = serverurl + url + "/" + selector + "/" + inner + "?jsonp=" + callbackfunc
    insertScript(apiurl);
  }
}
