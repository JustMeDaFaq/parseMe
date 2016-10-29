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
                    data.append('usr_login', '');
                    data.append('id', id);
                    data.append('fname', fname);
                    data.append('referer', '');
                    data.append('hash', hash);

                    http.onloadend = function() {
                        
                     //   var tt=http.responseText.split("eval(")[1].split("</script>")[0];
                    var result=http.responseText.split("p,a,c,k,e,d){while")[1].split("'.split")[0];
                    var temp= result.split(",")
                            
                    var p ="";
                    var a=0;
                    var c=0;
                    var k;
                    temp.forEach(element => {
                        if(!isNaN(Number(element)))
                            if(a==0 && Number(element)>20)
                                  a=Number(element);
                            else 
                                  c=Number(element);
                            });
                        p=result.split("',"+a+","+c+",'")[0];
                        k=result.split("',"+a+","+c+",'")[1].split("|");           
                        while(c--)if(k[c])p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])
                        var temp=p.split('"');
                        if(p.indexOf("mobile.mp4")!== -1)
                            var lnk=temp.find(x=>x.endsWith("mobile.mp4"));
                        else
                            var lnk=temp.find(x=>x.endsWith(".mp4"));

                        console.log(lnk);
                        console.log(k);
                    } 

                    http.send(data);
                }, 8000);

            } 
            http.send();   
