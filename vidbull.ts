      var http = new XMLHttpRequest();

      http.open("GET", url,true);
    
       http.onloadend = function() {
            var temp=http.responseText.split('"');
            var lnk=temp.find(x=>(x.endsWith(".mp4")||x.endsWith(".mkv")));
            doOnComplete(lnk);
       } 
       
      http.send();
