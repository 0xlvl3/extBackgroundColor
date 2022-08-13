let color = "#3aa757";

/**
 * Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version
 * https://developer.chrome.com/docs/extensions/reference/storage/
 */
chrome.runtime.onInstalled.addListener(() => {
  //chrome.storage API can store, retrieve and track changes to user data
  chrome.storage.sync.set({ color }); //chrome.storage is pretty much localStorage
  console.log(`Default background color is set to %cgreen`, `color: ${color}`);
});
