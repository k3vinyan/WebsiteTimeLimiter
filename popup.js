const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function(e) {
    const input = document.getElementById('input');
    const messageContainer = document.getElementById('message-container');
    const message = document.getElementById('message');
    const value = input.value;

    
    chrome.storage.local.get(['websites'], function(results) {
        let count = 0;
        
        if(results.websites === undefined) {
            results.websites = []
        }

        for(let i = 0; i < results.websites.length; i++) {
            if(value === results.websites[i]) {
                count++;
            }
        }

        if(count === 0) {
            results.websites.push(value);
            message.innerHTML = "Website Added!";
            messageContainer.style.background = "green";
            messageContainer.style.display = "flex";
        } else {
            message.innerHTML = "Already Added!";
            messageContainer.style.background = "red";
            messageContainer.style.display = "flex";
        }

        setTimeout(function() {
            messageContainer.style.display = "none";
        }, 2000)
    
        chrome.storage.local.set(results);
    })

    
})