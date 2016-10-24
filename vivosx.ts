    if(!url.startsWith("https"))
          url=url.replace("http","https");
    var http = new XMLHttpRequest();
    http.open("GET", url,true);
    http.onloadend = function() {
          var splitted=http.responseText.split("'");
          var lnk=splitted[splitted.findIndex(x=>x.endsWith("Core.InitializeStream ("))+1]; //der link
          var lnks = JSON.parse(window.atob(lnk));
          doOnComplete(lnks[1]);  
         // console.log(window.atob(lnk));        
    } 
    http.send();
