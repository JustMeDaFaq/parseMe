if(!url.startsWith("https"))
      url=url.replace("http","https");
console.log(url);
var http = new XMLHttpRequest();
http.open("GET", url,true);
http.onloadend = function() {
      var splitted=http.responseText.split('"');
      var lnk=splitted[splitted.findIndex(x=>x.endsWith("data-url="))+1]; //der link
      doOnComplete(lnk);         
} 
http.send();
