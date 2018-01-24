
var app={userID:"",post:{}};

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2085524628325574',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });

    //FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
  if(response.status==='connected'){
    console.log('Logged in and athenticated ');
    app.userID=response.authResponse.userID;
    setElements(true);
    //testAPI();
    //testPageAPI('TVSTest');
    //Got all the pages to display
    getAllPages();

  }else{
    console.log('Not Authenticated');
    setElements(false);
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function logout(){
  FB.logout(function(response){
    statusChangeCallback(response);
    setElements(false);
  });
}
