function setElements(isloggedIn){
  if(isloggedIn){
    document.getElementById('fb-btn').style.display='none';
    document.getElementById('logout').style.display='block';
    document.getElementById('heading').style.display='none';
    document.getElementById('feed').style.display='block';
//    document.getElementById('profile').style.display='block';
    document.getElementById('dropdown_pages').style.display='block';
//    document.getElementById('_Login_body').style.display='block';

  }else{
    document.getElementById('fb-btn').style.display='block';
    document.getElementById('logout').style.display='none';
    document.getElementById('heading').style.display='block';
    document.getElementById('feed').style.display='none';
  //  document.getElementById('profile').style.display='none';
    document.getElementById('dropdown_pages').style.display='none';
  //  document.getElementById('_Login_body').style.display='none';
  }
}
