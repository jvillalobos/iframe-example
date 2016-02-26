# iframe-example
An example of iframe interaction using WebExtensions.

It works specifically with [this page](http://xulforge.com/mozilla/iframe-example/). The page loads two iframes, one from the same domain and another one from example.com.

The add-on takes the content of both iframes and injects it into the main page. It serves as an example of a content script that has to work on subframes of a page, and shows how messaging can be coordinated between scripts at a basic level.
