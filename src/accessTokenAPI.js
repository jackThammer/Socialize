/**
 * Setting the pageAccessToken
 */

 function getAccessToken(page_id){
   console.log("getAccessToken");
   FB.api(
     page_id,
     'GET',
     {"fields":"access_token"},
     function(response) {
       if(response && !response.error){
             console.log(response);
             setAccessToken(response.access_token);
           }else{
             console.log("ERROR:getAccessToken");
             console.log(response);
           }
     }
   );
 }
