var http = new XMLHttpRequest();

      http.open("GET", url,true);
       http.onloadend = function() {


          var temp=http.responseText.split('"');
          var id=temp[temp.findIndex(x=>x=="id")+2];
          var fname=temp[temp.findIndex(x=>x=="fname")+2];
          var hash=temp[temp.findIndex(x=>x=="hash")+2];
         
         setTimeout(function() {
            http = new XMLHttpRequest();
            var data = new FormData();
            http.open("POST", url, true);
            data.append('op', "download1");
            data.append('usr_login', "");
            data.append('id', id);
            data.append('fname', fname);
            data.append('referer', "");
            data.append('hash', hash);

            http.onloadend = function() {
                    var temp=http.responseText.split('"');
                    var lnk=temp[temp.findIndex(x=>x.endsWith("file:"))+1];
                    doOnComplete(lnk)
                
            } 

            http.send(data);
        }, 5000);

       } 
      http.send();
