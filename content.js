chrome.runtime.onMessage.addListener(function (request) {
    changeColor(request)
    
 })
 
 function changeColor(request){
     document.body.style.backgroundColor = request;
     document.body.style.display = request;
 };