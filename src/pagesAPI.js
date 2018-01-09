
function addPost(page_id){
  //POSTING TO THE PAGE
  FB.api(
  page_id+'/feed',
  'POST',
  {"message":"POSTING FROM THE APP1"},
  function(response) {
      // Insert your code here
      if(response && !response.error){
            console.log(response);
          }else{
            console.log(response);
          }
  }
);

}
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

function displayPosts(page_id){
  FB.api(page_id+'/feed',function(response){
    if(response && !response.error){
      //console.log(response);
      buildPagesPost(response);
    }else{
      console.log(response.error);
    }
  });

}
function buildPagesPost(feed){
  let output='<h3>Latest Post</h3>';
  for(let i in feed.data){
    if(feed.data[i].message){
      output+=`
      <ul class="list-group">
        <li class="list-group-item">
          <li class="list-group-item">Post: ${feed.data[i].message}</li>
          <li class="list-group-item">Time: ${feed.data[i].created_time}</li>
        </li>
        </ul>
      `;
    }
  }
  output+='';
  document.getElementById('feed').innerHTML = output;
}
