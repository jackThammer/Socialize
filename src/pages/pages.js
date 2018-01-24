
/**
 * Unused Code
 */
function goToPage(page_name){
  console.log("Selected page "+page_name);
  document.getElementById('Page_Name').innerHTML = page_name;
//  removeOldProfile();
//  console.log("removeOldProfile");
  pageAPI(page_name,"display");
}
/*
function removeOldProfile(){
  var div = document.getElementById('feed');
if (div) {
    div.parentNode.removeChild(div);
}
}
*/

/*
function pageAPI(a_name,task){
  console.log("Searching for account id");

  FB.api('me?fields=name,email,accounts',function(response){
    var found=0;
    if(response && !response.error){
      for(let i in response.accounts.data){
        if(response.accounts.data[i].name===a_name){
          found=1;
          if(task=="display"){
            displayPosts(response.accounts.data[i].id);
          }else if (task=="post") {
            addPost(response.accounts.data[i].id);
          }
          break;
        }
      }
      if(found==0){
          console.log("ERROR: Unable to find the requested Page");
      }

    }else{
      console.log(response.error);
    }

  });

}
*/
