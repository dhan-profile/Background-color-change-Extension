const colorEl = document.getElementById("color-changer");

const rotateEl = document.getElementById("rotate");

const rotate3DEl = document.getElementById("rotate3d");

colorEl.addEventListener("input", () => {
  injectCSS(`body {
        background-color: ${colorEl.value}!important;
    }`);
});


rotateEl.addEventListener("input", () => {
  injectCSS(`body {
          transform: rotate(${rotateEl.value}deg)!important;
      }`);
});

rotate3DEl.addEventListener("input", () => {
  injectCSS(`body {
            transform: rotate3d(1,1,1,${rotate3DEl.value}deg)!important;
        }`);
});

function injectCSS(css) {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab) return;
    chrome.scripting.insertCSS({
      css,
      target: { tabId: tab.id },
    });
  });
}