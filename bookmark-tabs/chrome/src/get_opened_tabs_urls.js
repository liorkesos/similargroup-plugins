  function myDate()
  {
  var now = new Date();
  alert(now);
  return now.getDate()+'/'+now.getMonth()+1+'/'+now.getFullYear();
}
function printBookmarks(id) {
 noww='extension';
chrome.bookmarks.getChildren(id, function(children) {
    children.forEach(function(bookmark) { 
      if(bookmark.title==noww)
         {
         alert("רצונ"+bookmark.title);
         bb=bookmark.id;
          return 0;
          }
     
     printBookmarks(bookmark.id);
   });
 
 });return 1;
}

function list(tabs) {  
//if(!printBookmarks('0'))
 chrome.bookmarks.create({
                         'title': 'extension'},
                        function(newFolder) {
                                     myfolder=newFolder.id ;
                                            });
//else mm=bb;
  now1=myDate(); 
 chrome.bookmarks.create({'parentId':myfolder,
                         'title': now1},
                        function(newFolder) {
                                     mm=newFolder.id ;
                                   });
for (var i = 0; i < tabs.length; i++) 
  {
    alert(i);
          my=tabs[i].url + '\n';
        chrome.bookmarks.create({'parentId':mm,
                         'title': my,
                       'url': my});    
       }
 }

document.getElementById('copy').addEventListener('click', function(e) {
    chrome.tabs.getAllInWindow(null, list);
 }); 