/**
 * Copyright 2016 Jorge Villalobos
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

"use strict";

if (window != window.top) {
  // frame.
  // send message to background script.
  browser.runtime.sendMessage(
    { "host" : window.location.hostname,
      "body" : document.body.innerHTML });
} else {
  // top window.
  browser.runtime.onMessage.addListener(function(message, sender) {
    if (sender.id == "iframe-example@xulforge.com") {
      let frameId = ((message.host == "xulforge.com") ? "frame1" : "frame2");
      let frame = document.getElementById(frameId);

      if (frame) {
        let container = document.createElement("div");

        // XXX: message.body should be sanitized before injecting!
        container.setAttribute("class", "container");
        container.innerHTML = message.body;
        // inject content from frame.
        frame.parentNode.insertBefore(container, frame);
        // remove frame.
        frame.parentNode.removeChild(frame);
      }
    }
  });

  browser.runtime.sendMessage({ "loaded" : true });
}
