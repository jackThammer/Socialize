//TODO
function getAllPages(){
  console.log("Getting all the pages to for the dropdown option");
  FB.api('me?fields=name,email,accounts',function(response){
    var found=0;
    if(response && !response.error){
      console.log(response);
      buildDropdownPages(response.accounts);
    }else{
      console.log(response.error);
    }

  });
}

//response.accounts.data[].name
function buildDropdownPages(pages){
  let output='';
  for(let i in pages.data){
    if(pages.data[i].name){
      output+=`
        <a href="#" onclick="goToPage(\'${pages.data[i].name}\')">${pages.data[i].name}</a>
      `;
    }
  }
  console.log(output);
  document.getElementById('myDropdown').innerHTML = output;
}

function goToPage(page_name){
  console.log("Selected page "+page_name);
  document.getElementById('Page_Name').innerHTML = page_name;
//  removeOldProfile();
//  console.log("removeOldProfile");
  pageAPI(page_name,"display");
}

function removeOldProfile(){
  var div = document.getElementById('feed');
if (div) {
    div.parentNode.removeChild(div);
}
}
