//This runs in the background
console.log("Background is Going On..!");
//by clicking on button get tab details
chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
  console.log(tab);
}
//creates a new Facebook Tab
chrome.tabs.create({url:'http://facebook.com'},callback);
//callback function
function callback(data){
    console.log(data);
  }





