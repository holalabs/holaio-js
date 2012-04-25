# Javascript library for HolaIO
This API can be used in any modern web browser.

We don’t recommend the use of this API in desktop browsers because an attacker could see your API key. It’s completely safe to use it in mobile browsers or if your app is bundled with PhoneGap or uses a custom WebView.

## Object HolaIO(String APIKey)

Creates a instance of HolaIO with the specified API key.

Usage:

``` javascript
var io = new HolaIO("yourapikey");
```

## Function HolaIO.get(String url, String selector, Boolean inner, Boolean cache, Function callback)

Get the content specified in the following (obligatory) parameters:

  - URL: A valid URL without the protocol scheme, because HolaIO currently works only with HTTP so it’ll add the prefix by default. Example: `holalabs.com`
  - Selector: A valid CSS3 selector. If you want to get more than a selector a time, strip them by commas. Example: `a, .primary.content`
  - Inner or outer: Specify if you want to extract the inner (the content) or the whole content of your selection. Possible values: `true` or `false`
  - Cache: Specify if you want to cache the petition. If you choose to cache it, the petition will be stored in session storage. Possible values: `true` or `false` 
  - Callback: Specify the function you want to run after the content is returned. HolaIO will pass two parameters to the callback: the status code the server sent (useful to check errors) and the reply that contains the parsed JSON. Example: `makeThingWithContent` or `function (err, json) { }`

Usage:

``` javascript
io.get("google.com", "a span", true, true, displayGoogleLinks);

function displayGoogleLinks (err, json) {
  // Have fun
  if (err == 200)
    var links = json["a span"];
  else
    alert("Error "+err);
}
```
