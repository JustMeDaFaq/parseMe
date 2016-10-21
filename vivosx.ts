var http = new XMLHttpRequest();
     http.open("GET", url,true);
     http.onloadend = function() {
          var temp=http.responseText.split('"');
          var hash=temp[temp.findIndex(x=>x=="hash")+2];
          var timestamp=temp[temp.findIndex(x=>x=="timestamp")+2];
          var hash=temp[temp.findIndex(x=>x=="hash")+2];
         
         setTimeout(function() {
            http = new XMLHttpRequest();
            var data = new FormData();
            http.open("POST", url, true);
            data.append('hash', hash);
            data.append('timestamp', timestamp);

            http.onloadend = function() {
                var splitted=http.responseText.split('"');
                var lnk=splitted[splitted.findIndex(x=>x.endsWith("data-url="))+1];
                doOnComplete(lnk);
                 
            } 

            http.send(data);
        }, 8000);
       } 
      http.send();

    }
