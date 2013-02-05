

function similarDate() {
  var now = new Date();
    var sec=now.getSeconds();
     if( sec < 10 )
       sec='0'+sec;
     var min=now.getMinutes();
     if( min < 10 )
       min='0'+min;
     var hour=now.getHours();
     if( hour < 10 )
       hour='0'+hour;
    return now.getDate()+'/'+now.getMonth()+1+'/'+now.getFullYear()+' '+hour+':'+min+':'+sec;

}
function getOpenTabs( tabs ) {  
   var currDate = similarDate(); 
   var currentmyFolderID;
  chrome.bookmarks.create( {

    'title': currDate},
    function ( newFolder ) {
     currentmyfolderID = newFolder.id ;
    });
  //alert(currentmyfolderID);
  for ( var i = 0; i < tabs.length; i++ ) {
        var tabUrl   = tabs[i].url ;
        var tabTitle = tabs[i].title;
        chrome.bookmarks.create({'parentId': currentmyfolderID,
         'title': tabTitle,
           'url': tabUrl});
  }
 }
chrome.browserAction.onClicked.addListener(function(tab) {
     chrome.tabs.getAllInWindow(null, getOpenTabs);
     });
/* Check unique directory
function printBookmarks(id) {
  chrome.bookmarks.getChildren(id, function(children) {
    children.forEach(function(bookmark) { 
    if( bookmark.title == noww ) {
      bb = bookmark.id;
      return 0;
    }
     printBookmarks(bookmark.id);
   });
 });return 1;
}
*/

/* Possible html5 local storage too store directory ids.
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}*/