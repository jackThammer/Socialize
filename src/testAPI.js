function testAPI(){
  FB.api('/me?fields=name,email',function(response){
    if(response && !response.error){
      //console.log(response);
      buildProfile(response);
    }else{
      console.log(response.error);
    }
  });

  FB.api('/me/feed',function(response){
    if(response && !response.error){
      //console.log(response);
      buildFeed(response);
    }else{
      console.log(response.error);
    }
  });
}


function buildFeed(feed){
  let output='<h3>Latest Post</h3><ul class="list-group">';
  for(let i in feed.data){
    if(feed.data[i].message){
      output+=`

        <li class="list-group-item">
          ${feed.data[i].message}
        </li>
      `;
    }
  }
output+='</ul>';
  document.getElementById('feed').innerHTML = output;
}

function buildProfile(user){
  let profile=`
  <h3>${user.name}</h3>
    <ul class="list-group">
      <li class="list-group-item">User ID: ${user.id}</li>
      <li class="list-group-item">Email: ${user.email}</li>
    </ul>
  `;
console.log(profile);
  document.getElementById('profile').innerHTML=profile;
}
