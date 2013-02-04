

function similarDate() {
  var now = new Date();
    var sec=now.getSeconds();
     if( sec < 10 )
       sec='0'+sec;
    return now.getDate()+'/'+now.getMonth()+1+'/'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes()+':'+sec;

}
function getOpenTabs( tabs ) {  
   var currDate = similarDate(); 
  chrome.bookmarks.create( {
    'title': currDate},
    function ( newFolder1 ) {
    currentmyfolderID = newFolder1.id ;
    alert('p'+currentmyfolderID);});
  for ( var i = 0; i < tabs.length; i++ ) {
    var tabUrl   = tabs[i].url ;
        var tabTitle = tabs[i].title ;
alert(tabUrl); 
        chrome.bookmarks.create({'parentId': currentmyfolderID,
      'title': tabTitle,
      'url': tabUrl});    
  }
 }
chrome.browserAction.onClicked.addListener(function(tab) {
alert('yes');
alert('book');
     chrome.tabs.getAllInWindow(null, getOpenTabs);
     alert('end');

chrome.tabs.executeScript(null, {file: "prompt.js"});
});