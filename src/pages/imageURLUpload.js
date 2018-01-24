
/*Post Image*/
//TODO for unpublished post
function addImagePost(){
  /*
  // Get file object from file input
  var file = document.post_form.input_file.value;
  // If file is selected
  if (file) {
    //uploadImageAPI(file);
  }
  */
if(document.post_form.input_image_url.value){
  console.log("FOUND IMAGE URL");
  IsValidImageUrl(document.post_form.input_image_url.value,uploadImageAPI_callback);
}else {
  console.log("NOT FOUND URL");
}

  //uploadImageAPI(document.post_form.input_image_url.value);
}
function uploadImageAPI_callback(url, state) {
  if(state){
    uploadImageAPI(url,document.post_form.input_post.value);
  }else{
    alert("ERROR: Image URL not valid ("+url+')');
  }

}

function IsValidImageUrl(url,callback) {
    var img = new Image();
    img.onerror = function() { callback(url, false); }
    img.onload =  function() { callback(url,true); }
    img.src = url
}
