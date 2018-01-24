function updateIsPublished(access_token,page_id,val){
  FB.api(
  page_id+'/settings',
  'POST',
  {"option":"{\"IS_PUBLISHED\" : "+val+"}",
  "access_token":access_token},
  function(response) {
    if(response && !response.error){
          console.log(response);
          if(response.success){
          //TODO CREATE AN ALERT
          getUpdatedSettings(page_id,access_token);
          }
          else {
            //TODO CREATE AN ALERT
          }
        }else{
          console.log("ERROR: updateIsPublished");
          console.log(response);
        }
  }
);
}

function getUpdatedSettings(page_id,access_token){
  FB.api(
    page_id+'/settings',
    'GET',
    {"access_token":access_token},
    function(response) {
        // Insert your code here
        if(response && !response.error){
              console.log(response);
              isPublished(response.data);
            }else{
              console.log("ERROR: getUpdatedSettings");
              console.log(response);
            }
    }
  );
}

function isPublished(data){
  for(let i in data){
    if(data[i].setting=="IS_PUBLISHED"){
      buildPublishButton(data[i].value);
      console.log("IS_PUBLISHED: "+data[i].value);
    }
  }
}
