/**
* API FOR GETTING THE NUMBER OF PEOPLE WHO HAVE SEEN EACH POST
* USE THE /insights/
**/
function post_impressions_unique(post_id,access_token){
FB.api(
  post_id+'/insights/post_impressions_unique',
  'GET',
  {"access_token":access_token},
  function(response) {
      // Insert your code here
      if(response && !response.error){
        //console.log(response);
        buildPeopleViewed(post_id,response.data[0].values[0].value);
      }else{
        console.log(response);
      }
  }
);
}
