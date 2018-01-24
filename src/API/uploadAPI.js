
/*UPLOAD IAMGES from local*/
//WORKING IMAGE UPLOAD

function localImageUpload() {
  FB.api(app.page_id+'/photos', function(response) {
    var action_url = 'https://graph.facebook.com/' + app.page_id + '/photos?access_token=' +  app.access_token;
    var form = document.getElementById('upload-photo-form');
    form.setAttribute('action', action_url);
    form.submit();
    setTimeout(function(){
      updatePage();
    }, 3000);

  });
}
function localVideoUpload() {
  FB.api(app.page_id+'/videos', function(response) {
    var action_url = 'https://graph.facebook.com/' + app.page_id + '/videos?access_token=' +  app.access_token;
    var form = document.getElementById('upload-video-form');
    form.setAttribute('action', action_url);
    form.submit();
    setTimeout(function(){
      updatePage();
    }, 3000);
  });
}




/*UPLOAD IAMGES using the URL*/
function uploadImageAPI(image_url,comment){
  // We will use FileReader
  console.log("uploadImageAPI()");

      FB.api(
      app.page_id+'/photos',
      'POST',
      {"url":image_url  ,"caption":comment,"access_token":app.access_token},
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




/**
*

$('#button_upload').click(function (e) {
   e.preventDefault();

    // Get file object from file input
    var file = $('#input_file')[0].files[0];

    // If file is selected
    if (file) {
        // We will use FileReader
        var reader = new FileReader();
        // And and onload callback when file data loaded
        reader.onload = function (e) {
            // This is array buffer of the file
            var arrayBuffer = e.target.result;
            // And blob object of the file
            var blob = new Blob([arrayBuffer], { type: file.type });

            // We will use FormData object to create multipart/form request
            var data = new FormData();
            data.append('access_token', FB.getAccessToken());
            data.append('source', blob);
            data.append('message', $('#input_description').val());

            $('#uploading').show();

            // Send the request manually with jQeury
            $.ajax({
                url: 'https://graph.facebook.com/me/photos?access_token=' + FB.getAccessToken(),
                type: 'POST',
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                success:function (data) {
                    $('#status').append('<p>Photo was successfully uploaded, object id is: ' + data.id + '</p>');
                    console.log(data)
                },
                error:function (data) {
                    console.log(data);
                },
                complete: function () {
                    $('#uploading').hide();
                }
            });

        };
        // Read file as array buffer to create blob object
        reader.readAsArrayBuffer(file);
    }
});
**/
