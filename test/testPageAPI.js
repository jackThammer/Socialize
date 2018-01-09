
/*
function testPageAPI(){
//find the account-ID
//var page_id=testGetAccounts('TVSTest');
/*
//NOW you can acces the page acces token

  FB.api(page_id+'?fields=access_token',function(response){
    if(response && !response.error){
      var access_token=response.access_token;
    }else{
      console.log(response.error);
    }
  });
*/
//testToPost();}

function testToPost(page_id){
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
function testPageAPI(a_name){
  console.log("Searching for account id");

  FB.api('me?fields=name,email,accounts',function(response){
    var found=0;
    if(response && !response.error){
      console.log(response);
      for(let i in response.accounts.data){
        if(response.accounts.data[i].name===a_name){
          found=1;
          testToPost(response.accounts.data[i].id);
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
