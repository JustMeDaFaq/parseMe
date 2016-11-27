     if (url.indexOf('/f/')!= -1){
                        url=url.split('/f/')[1].split('/')[0];              
          }
             var http = new XMLHttpRequest();
          http.open('GET','https://api.openload.co/1/streaming/get?file='+url,true)
         
          http.onloadend=  function (){
                  console.log(JSON.parse(http.responseText))
                  if(JSON.parse(http.responseText).msg.indexOf("not")>0){
                     let confirm = hosterControllerBSAPI.promp.create({
                          title: 'Use this lightsaber?',
                          message: 'You are not paired. Pair your device to use openload with 3rd party applications.',
                          buttons: [
                            {
                              text: 'Different hoster',
                              handler: () => {
                                  
                              }
                            },
                            {
                              text: 'Pair now and try again',
                              handler: () => {
                             
                                window.open("https://openload.co/pair","_self").onabort = function(){
                                  alert("unload");
                                }

                               }
                            }
                          ]
                        });
                        confirm.present();
                  }else{
                    doOnComplete(JSON.parse(http.responseText).result);
                  }

              }
              http.send();
