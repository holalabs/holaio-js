/* HolaIO Javascript library | github.com/holalabs/holaio-js/blob/master/LICENSE.txt */

HolaIO = function(key) {
  this.key = key;
  this.serverurl = "https://api.io.holalabs.com/";
  // Insert the script dinamically using JSONP
  insertScript = function(url) {
    var script = document.createElement("script");
    script.setAttribute("type","text/javascript")
    script.setAttribute("src", url);
    if (typeof script != "undefined");
      document.getElementsByTagName("head")[0].appendChild(script);
    return script;
  }
  this.login = function() {
    var authurl = this.serverurl + "login/" + this.key + "?jsonp=HolaIO.authed";
    var script = insertScript(authurl);
  }
  this.login();
  this.get = function(url, selector, inner, callbackfunc) {
    if (HolaIO.logged) {
      url = encodeURI(url);
      selector = encodeURI(selector);
      var apiurl = this.serverurl + url + "/" + selector + "/" + inner + "?jsonp=" + callbackfunc
      insertScript(apiurl);
    } else {
      var _this = this;
      setTimeout(function() {
        _this.get(url, selector, inner, callbackfunc);
      }, 100);
    }
  }
}

HolaIO.logged = false;

HolaIO.authed = function() {
  HolaIO.logged = true;
};