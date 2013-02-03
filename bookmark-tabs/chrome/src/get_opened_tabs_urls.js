/*
<license>
Get opened tabs URLs - a Google Chrome extension
Copyright 2010 Christophe Benz.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
</license>

Icon from Silk icon set:
http://www.famfamfam.com/lab/icons/silk/
*/

/*
  function myDate()
  {
  var now = new Date();
  //alert(now);
  return now.getDate()+'/'+now.getMonth()+1+'/'+now.getFullYear();
}
function printBookmarks(id,m) {
chrome.bookmarks.getChildren(id, function(children) {
    children.forEach(function(bookmark) { 
      if(bookmark.title==m)
         {
         alert("רצונ"+bookmark.title);
          return 0;
          }
     
     //printBookmarks(bookmark.id);
   });
 
 });return 1;
}
function list(tabs) {
 //BabelExt.tabs.create('http://www.google.com', true);

 
   now1=myDate(); 
 if(printBookmarks('0'))
 chrome.bookmarks.create({
                         'title': now1},
                        function(newFolder) {
  alert("added folder: " + newFolder.id);
  n=newFolder.id ;
});
for (var i = 0; i < tabs.length; i++) 
  {
    //alert(i);/*
    
      contents += tabs[i].url + '\n';
      my=tabs[i].url + '\n';
    
    chrome.bookmarks.create({'parentId': n,
                         'title': my,
                         'url': my});  
 
   
   alert(now1); 
    my='';

  }
  document.getElementById('url-list').value = contents;
}

document.getElementById('copy').addEventListener('click', function(e) {
     alert('book');
   
 
  chrome.tabs.getAllInWindow(null, list);


  //alert('zyyyyyyyyy');
 
 
 
}); */
 function myDate()
  {
  var now = new Date();
  //alert(now);
  return now.getDate()+'/'+now.getMonth()+1+'/'+now.getFullYear();
}
function list(tabs) {
  now1=myDate();
var mm;
 /* chrome.bookmarks.create({
                         'title': now1},
                        function(newFolder) {n=newFolder.id;mm=n;
  alert("added folder: " + newFolder.title+n);
  
});*/
alert('mm');
 for (var i = 0; i < tabs.length; i++) {
          contents=tabs[i].url + '\n';
    chrome.bookmarks.create({
                         'title': contents,
                         'url': contents}); alert(i);
  } 
  alert('nn');
}s


/*chrome.browserAction.onClicked.addListener(function(e) {
alert('nbnbnb)'; 
 chrome.tabs.getAllInWindow(null, list);
 
 alert('book');
});*/

document.getElementById('copy').addEventListener('click', function(e) {
alert('nbnbnb)'; 
 chrome.tabs.getAllInWindow(null, list);
 
 alert('book');
});

