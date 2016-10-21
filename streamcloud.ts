       var http = new XMLHttpRequest();
       http.open("GET", url,false);
       http.onloadend = function() {
          var temp=http.responseText.split('"');
          var id=temp[temp.lastIndexOf("id")+ 2];
               var PostData = function ( id, url,doOnComplete){
                        var http = new XMLHttpRequest();
                        var data = new FormData();
                        http.open("POST", url, true);
                        data.append('op', 'download2');
                        data.append('id', id);
                        data.append('imhuman', 'Weiter zum Video');
                        http.onloadend = function() {
                          var temp=http.responseText.split('"');
                            var link=temp.find(x => x.endsWith("video.mp4"));
                            doOnComplete(link);
                          
                        } 

                        http.send(data);
                    }
               PostData(id,url,doOnComplete);

           
        
       } 
      http.send();
