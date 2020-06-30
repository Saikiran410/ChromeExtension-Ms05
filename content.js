console.log("Chrome extensions Ready ?!");
chrome.runtime.sendMessage("Hello Saikiran");
//Initially it has,After sending message this is replaced
chrome.runtime.onMessage.addListener(gotMessage);
//gotMessage has three aruments 
function gotMessage(message,sender,sendResponse){
  console.log(message.txt);
  if(message.txt === "Saikiran"){
    let paragraphs = document.getElementsByTagName('p');
    for(elt of paragraphs){
      elt.style ['background-color'] = '#FF00FF';
    }
  }
}
