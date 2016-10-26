     var srcc="";
        url=url.replace(".tv/",".me/playvid-");
            if(!url.endsWith("html"))
              url=url+".html";
                  console.log(url);
            var http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.onloadend = function() {
              if(http.responseText.indexOf("reloadit")!=-1){
                 console.log("reload");

                     var tempR=http.responseText.split('"');
                  var rLink = tempR.find(x=>x.startsWith("./reloadit"))
                  var fLink="http://www.flashx.tv"+rLink.replace(".","");
                           
                  var httpE = new XMLHttpRequest();
                           console.log("http://www.flashx.tv"+rLink.replace(".",""));
                            httpE.open("GET", fLink, false);
                            httpE.send();
                                     var httpD= new XMLHttpRequest();
                                      httpD.open("GET", url, false);
                                           httpD.send();
                                           srcc=httpD.responseText;

              }else
                                  srcc=http.responseText;
                    var result=srcc.split("p,a,c,k,e,d){while")[1].split("'.split")[0];
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

                        alert(lnk);
                
                      
          
             }
        http.send();
