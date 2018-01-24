
function buildPublishButton(exist){
    let pub_button='';
  if (exist){//TO CHANGE TO FALSE BECAUSE WE HAVE TO UNPUBLISHE
     pub_button+=`<button type="submit" class="btn btn-primary" onclick="updatePageStatus(false)">Unpublish this page</button>`;
  }else{//TO CHANGE TO TRUE BECAUSE WE HAVE TO PUBLSIHE IT
    pub_button+=`<button type="submit" class="btn btn-primary" onclick="updatePageStatus(true)">Publish this page</button>`;
  }//console.log("pub_button "+pub_button);
  document.getElementById('isPublished_button').innerHTML = pub_button;
}

/*
BUILDING THE PUBLISHED POST
*/
function buildPagesPost(feed,access_token){
  let output='<h3>Published Post</h3>';
  for(let i in feed.data){
    if(feed.data[i].message){
      var people_viewed=post_impressions_unique(feed.data[i].id,access_token);
      output+=`

            <div class="bs-component">
              <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header"><b>Post:</b> ${feed.data[i].message}</div>
                <div class="card-body">
                  <p><b>Time:</b> ${feed.data[i].created_time}</p>

      `;
      if(feed.data[i].picture){
        output+=`<img src=${feed.data[i].picture} width="150" height="160"">`;
      }
    output+=`
              <div id="no_people_viewed:${feed.data[i].id}"></div>
        </div>
      </div>
    </div>

`;
}   else if(feed.data[i].story){
          var people_viewed=post_impressions_unique(feed.data[i].id,access_token);
          output+=`

                <div class="bs-component">
                  <div class="card border-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header"><b>Story:</b> ${feed.data[i].story}</div>
                    <div class="card-body">
                      <p><b>Time:</b> ${feed.data[i].created_time}</p>

          `;
          if(feed.data[i].picture){
            output+=`<img src=${feed.data[i].picture} ">`;
          }
        output+=`
                  <div id="no_people_viewed:${feed.data[i].id}"></div>
            </div>
          </div>
        </div>

    `;
        }
  }
  output+='';
  //console.log("output: "+output);
  document.getElementById('feed').innerHTML = output;
  //TO DISPLAY ALL THE SETTING OF THE PAGE
  getUpdatedSettings(app.page_id,app.access_token);
//Building the numeber of people viewed layer
  getPeopleViewed(feed);
  //buildPeopleViewed(feed,app.access_token);
}

/*
DISPLAY THE PEOPLE WHO HAVE VIEWED EACH POST
*/
function getPeopleViewed(feed){
  for(let i in feed.data){
    if(feed.data[i].message){
      post_impressions_unique(feed.data[i].id,app.access_token)
    }
  }
}
function buildPeopleViewed(post_id,views){
  //console.log("buildPeopleViewed()"+views);
  var output=`<li class="list-group-item"><b>No. of People Viewed:</b> ${views}</li>`
  document.getElementById('no_people_viewed:'+post_id).innerHTML = output;
}


/*
BUILDING THE UNPUBLISHED POST
*/
function buildUnpublishedPost(feed){
  let output='<h3>Un-Published Post</h3>';
  for(let i in feed.data){
    if(feed.data[i].message){
      output+=`

            <div class="bs-component">
              <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header"><b>Post:</b> ${feed.data[i].message}</div>
                <div class="card-body">
                  <p><b>Time:</b> ${feed.data[i].created_time}</p>

      `;
      if(feed.data[i].picture){
        output+=`<img src=${feed.data[i].picture} width="150" height="160"">`;
      }
        output+=`
          <li class="list-group-item"><a href="#" onclick="postTheUnpublished(\'${feed.data[i].id}\')">->Publish This Post</a></li>
          <div id="no_people_viewed:${feed.data[i].id}"></div>
    </div>
  </div>
</div>

      `;
    }
  }
  output+='';
  //console.log("output: "+output);
  document.getElementById('unpublished_feed').innerHTML = output;
}
