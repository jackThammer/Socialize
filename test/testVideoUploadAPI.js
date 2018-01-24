//WORKING IMAGE UPLOAD

function imageUploadTEST() {
  FB.api(app.page_id+'/photos', function(response) {
    var action_url = 'https://graph.facebook.com/' + app.page_id + '/photos?access_token=' +  app.access_token;
    var form = document.getElementById('upload-photo-form');
    form.setAttribute('action', action_url);
    form.submit();
    console.log("RESPONSE: "+response);
    if(response && !response.error){
          console.log(response);
          updatePage()
        }else{
          console.log(response);
        }
  });
}
function videoUploadTEST() {
  FB.api(app.page_id+'/videos', function(response) {
    var action_url = 'https://graph.facebook.com/' + app.page_id + '/videos?access_token=' +  app.access_token;
    var form = document.getElementById('upload-video-form');
    form.setAttribute('action', action_url);
    form.submit();
    console.log("RESPONSE: "+response);

    if(response && !response.error){
          console.log(response);
          updatePage();
        }else{
          console.log(response);
        }
  });
}
