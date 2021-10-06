/*
    Méthodes d'accès aux services Web API bookmarksManager
 */

 const apiBaseURL= "http://localhost:5000/api/bookmarks";
//const apiBaseURL= /*"https://three-ethereal-castanet.glitch.me/api/contacts"  "https://chill-quasar-helicona.glitch.me/api/bookmarks";

function webAPI_getBookmarks( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmarks => {  successCallBack(bookmarks);
                                console.log("webAPI_getBookmarks - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmarks - error");
        }
    });
}

function webAPI_sortByName(successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "?sort=name",
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: bookmarks => { successCallBack(bookmarks); console.log("webAPI_sortByName - success");},
        error: function(jqXHR, textStatus, errorThrown){
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmark - error");
        }
    });
}
function webAPI_sortByCategory(successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "?sort=category",
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: bookmarks => { successCallBack(bookmarks); console.log("webAPI_sortByName - success");},
        error: function(jqXHR, textStatus, errorThrown){
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmark - error");
        }
    });
}

function webAPI_searchName(string, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "?name=" + string,
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: bookmarks => { successCallBack(bookmarks); console.log("webAPI_sortByName - success");},
        error: function(jqXHR, textStatus, errorThrown){
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmark - error");
        }
    });
}

function webAPI_getBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmark => { successCallBack(bookmark); console.log("webAPI_getBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmark - error");
        }
    });
}

function webAPI_addBookmark( bookmark, successCallBack, errorCallBack) {
    console.log('add', bookmark)
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(bookmark),
        success: () => {successCallBack();  console.log("webAPI_addBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_addBookmark - error");
        }
    });
}

function webAPI_modifybookmark( bookmark, successCallBack, errorCallBack) {
    console.log('modify', bookmark)
    $.ajax({
        url: apiBaseURL + "/" + bookmark.Id,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(bookmark),
        success:() => {successCallBack();  console.log("webAPI_modifybookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_modifybookmark - error");
        }
    });
}

function webAPI_deleteBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_deletebookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_deletebookmark - error");
        }
    });
}
