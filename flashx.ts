            url=url.replace(".tv/",".me/playvid-");
            url=url+".html";
            var http = new XMLHttpRequest();
            http.open("GET", url, true);
            console.log(url);
            http.onloadend = function() {
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
                    var lnk=temp.find(x=>x.endsWith("high.mp4"));
                console.log(lnk);
              //  doOnComplete(lnk)     
             }
        http.send();


