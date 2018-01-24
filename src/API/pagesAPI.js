/**
 * Setting access_token ,PAGE_NAME, PAGE_ID
 */
var app={page_id:"",page_name:"",access_token:""};

/**
 * called for building the dropdown of pages
 */
function getAllPages(){
  console.log("Getting all the pages to for the dropdown option");
  FB.api('me?fields=name,email,accounts',function(response){
    var found=0;
    if(response && !response.error){
      console.log(response);
      buildDropdownPages(response.accounts);
    }else{
      console.log(response.error);
    }

  });
}
function buildDropdownPages(pages){
  let output='';
  for(let i in pages.data){
    if(pages.data[i].name){
      output+=`
        <a href="#" onclick="setApp(\'${pages.data[i].id}\',\'${pages.data[i].name}\')">${pages.data[i].name}</a>
      `;
    }
  }
  //console.log(output);
  document.getElementById('myDropdown').innerHTML = output;
}
/**
 * DISPLAY THE ENTIRE PAGE
 */
 function updatePage(){
    //  setApp(page_id,page_name)
     displayPosts(app.page_id,app.page_name);
     displayUnpublishedPost(app.page_id);

  }
/**
 * Code for getting all the posts from one page
 */
function displayPosts(page_id,page_name){
  console.log("displayPosts()");
  //setApp(page_id,page_name);
  document.getElementById('Page_Name').innerHTML = page_name;
  FB.api(
    page_id+'/feed',
    'GET',
    {"fields":"picture,message,story,created_time"},
    function(response) {
        // Insert your code here
        if(response && !response.error){
          console.log(response);
          buildPagesPost(response,app.access_token);
        }else{
          console.log(response.error);
        }
    }
  );
}
/*USE TO UPDATE THE PAGE STATUS AFTER CLICKING THE BUTTON*/
function updatePageStatus(val){
  updateIsPublished(app.access_token,app.page_id,val);
}
function setApp(page_id,page_name){
  console.log("setApp()");
  app.page_id=page_id;
  app.page_name=page_name;
  set=getAccessToken(page_id);
  return set;
}
function setAccessToken(access_token){
  console.log("setAccessToken()");
  app.access_token=access_token;
  //Get the pages
  updatePage();
}
/**
 * Code to add a post to the page as user
 *//*
function addPost(){
  console.log("addPost()"+app.page_id);
  addPostAPI(app.page_id,document.post_form.input_post.value);
}
function addPostAPI(page_id,feed_post){
  console.log("addPostAPI()");
  FB.api(
  page_id+'/feed',
  'POST',
  {"message":feed_post},
  function(response) {
      // Insert your code here
      if(response && !response.error){
            console.log(response);
          }else{
            console.log(response);
          }
      displayPosts(app.page_id,app.page_name);
  }
);

}
*/
/**
  * VALIDATE YOUR FORM
  * REQUIRED: Post message(input_post)
  */
  function validateForm(){
    if(document.post_form.input_image_url.value&&document.post_form.input_post.value){
      addImagePost();//REDIRECT TO THE imageURLUpload.js

    }
    else if(document.post_form.input_post.value){
      addPost();
    }else{
      alert("ERROR: Need to enter post");
    }
  }
/**
 * Code to post to the page as the page itself
 *  access_token : pageAccessToken
 */

 function addPost(){
   console.log("addPost()");
   console.log(document.post_form._Published.value);
   if(document.post_form._Published.value=="publish"){
     addPostAPI(app.page_id,document.post_form.input_post.value);
   }else if (document.post_form._Published.value=="unpublish"){
     addUnPublishedPostAPI(app.page_id,document.post_form.input_post.value);
   }else if (document.post_form._Published.value=="scheduled"){
     //addSceduledPostAPI(app.page_id,document.post_form.input_post.value);
     sceduledPost(document.post_form.input_post.value,document.post_form.time.value);
   }
 }

 /*TO PUBLISH THE POST*/
 function addPostAPI(page_id,feed_post){
   console.log("addPostAPI()");
   FB.api(
   page_id+'/feed',
   'POST',
   {"message":feed_post,"access_token":app.access_token},
   function(response) {
       // Insert your code here
       if(response && !response.error){
             console.log(response);
             displayPosts(app.page_id,app.page_name);
           }else{
             console.log(response);
           }
   }
 );
 }

/*TO ADD UN-PUBLISH THE POST*/
  function addUnPublishedPostAPI(page_id,feed_post){
    console.log("addUnPublishedPostAPI()");
    FB.api(
    page_id+'/feed',
    'POST',
    {"message":feed_post,published:"false","access_token":app.access_token},
    function(response) {
        // Insert your code here
        if(response && !response.error){
              console.log(response);
              displayUnpublishedPost(app.page_id);
            }else{
              console.log(response);
            }
    }
  );
  }
  /**
   * DISPLAY THE UNPUBLISHED POSTS
   */
function displayUnpublishedPost(page_id){
  console.log("displayUnpublishedPost()");
  //console.log("access_token: "+app.access_token);
     FB.api(
   page_id+'/promotable_posts',
   'GET',
   {"is_published":"false","access_token":app.access_token},
   function(response) {
     if(response && !response.error){
         console.log(response);
         buildUnpublishedPost(response);
     }else{
       console.log("ERROR: displayUnpublishedPost()");
         console.log(response);
     }
   }
 );
}

/*TO POST THE ALREADY CREATED BY UNPUBLISHED POST*/
function postTheUnpublished(post_id){
  //GET THE ID OF THE POST AND THEN SET FEILD is_published=true
  console.log("ID POST-> "+post_id);
  FB.api(
  post_id,
  'POST',
  {"is_published":"true","access_token":app.access_token},
  function(response) {
      // Insert your code here

      if(response && !response.error){
            updatePage();
      }else{
          console.log("ERROR: postTheUnpublished()");
          console.log(response);
      }
  }
);
}
  /*TO SCHEDUL THE POST*/

  function addSceduledPostAPI(message,timestamp){
    console.log("addSceduledPostAPI()");
    FB.api(
  app.page_id+'/feed',
  'POST',
  {"message":message,"published":"false","scheduled_publish_time":timestamp,"access_token":app.access_token},
  function(response) {
      if(response && !response.error){
            updatePage();
      }else{
          console.log(response);
      }
  }
);
  }


function sceduledPost(message,time){
  //Convert the time to UNIK timestamp
  console.log("ENTERED SceduledPost()");
  var timestamp=toTimestamp(time);
  //CALL THE addSceduledPostAPI();
  addSceduledPostAPI(message,timestamp);
}

function toTimestamp(strDate){
 var datum = Date.parse(strDate);
 return datum/1000;
}
