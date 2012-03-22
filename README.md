# Javascript library for HolaIO
This API can be used in any modern web browser.

We don’t recommend the use of this API in desktop browsers because an attacker could see your API key. It’s completely safe to use it in mobile browsers or if your app is bundled with PhoneGap or uses a custom WebView.

## Object HolaIO(String APIKey)

Creates a instance of HolaIO with the specified API key.

Usage:

``` javascript
var io = new HolaIO("yourapikey");
```

## Function HolaIO.get(String url, String selector, String inner, String callback)

Get the content specified in the following (obligatory) parameters:

  - URL: A valid URL without the protocol scheme, because HolaIO currently works only with HTTP so it’ll add the prefix by default. Example: `holalabs.com`
  - Selector: A valid CSS3 selector. If you want to get more than a selector a time, strip them by commas. Example: `a, .primary.content`
  - Inner or outer: Specify if you want to extract the inner (the content) or the whole content of your selection. Possible values: `inner` or `outer`
  - Callback: Specify the name of the Javascript function you want to run after the content is returned. HolaIO will pass it a single parameter with the parsed JSON. Example: `makeThingWithContent`

Usage:

``` javascript
io.get("google.com", "a span", "inner", "displayGoogleLinks");

function displayGoogleLinks (json) {
  var links = json["a span"];
  // Have fun
}
```
