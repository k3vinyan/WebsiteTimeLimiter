chrome.storage.local.get(["websites"], function(results) {
    let host = window.location.host;
    let count = 0;

    for(let i = 0; i < results.websites.length; i++) {
        let url = results.websites[i] + ".com";
        let www = "www." + url;

        if(url === host || www === host) {
          
            count++;
        }
    }

    if(count > 0) {
        let body = document.getElementsByTagName("BODY")[0];
        body.innerHTML = "SITE IS BLOCK";
    } else {
        console.log("site is not block")
    }

  
})

