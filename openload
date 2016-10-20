url="https://openload.co/embed/"+url;
console.log("hi");
     var http = new XMLHttpRequest();
      http.open("GET", url,true);
console.log("hi");
       http.onloadend = function() {

       

          var temp=http.responseText.split('"');
          var hidden=temp[temp.findIndex(x=>x=="streamurl")-3];
          hidden=hidden.split(">")[1];
          hidden=hidden.split("<")[0];


          var magic = hidden.slice(-1).charCodeAt(0);
          hidden = hidden.split(String.fromCharCode(magic-1)).join("	");
          hidden = hidden.split(hidden.slice(-1)).join(String.fromCharCode(magic-1));
	      hidden = hidden.split("	").join(String.fromCharCode(magic));
           
        
            var x = hidden;
            var e:any=document.createElement('textarea');
                e.innerHTML=x;
                x=e.value;
            var s=[];
            for(var i=0;i<x.length;i++){var j=x.charCodeAt(i);if((j>=33)&&(j<=126)){s[i]=String.fromCharCode(33+((j+14)%94));}else{s[i]=String.fromCharCode(j);}}

            var tmp=s.join("");

            var str = tmp.substring(0, tmp.length - 1) + String.fromCharCode(tmp.slice(-1).charCodeAt(0) + 2);
            var srclink = "https://openload.co/stream/" + str + "?mime=true";
            doOnComplete(srclink);
            
                
       } 
      http.send();
