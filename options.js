// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', function() {
//       chrome.storage.sync.set({color: item}, function() {
//         console.log('color is ' + item);
//       })
//     });
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);

const container = document.getElementById('options-container');

console.dir(container)

chrome.storage.local.get(["websites"], function(results) {
    const websites = results.websites

    for(let i = 0; i < websites.length; i++) {
        const web = webSiteDiv(websites, i);
        container.appendChild(web);
    }

})


function deleteButton() {
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('delete-button');
    button.innerHTML = "X";

    div.appendChild(button)

    return div;
}



function webSiteDiv(websites, i) {
    const container = document.createElement('div');
    container.classList.add('website');
    container.id = websites[i];
    container.innerHTML = websites[i];

    const option = options(['time', 'period']);
    const button = deleteButton();
    container.appendChild(option);
    container.appendChild(button);

    return container;
}

function options(arr) {
    const a = arr;
    const container = document.createElement('select');
    container.classList.add('select');

   
    for(let i = 0; i < a.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = a[i]
        option.setAttribute("value", i);
       container.appendChild(option);
    }

    return container;
}



Table.prototype.addRow = function() {
    if(this.rows === undefined) {
        this.rows = [];
    } 

    
}


function Row() {
    this.row = document.createElement('')
}

container.addEventListener('click', function(e) {

    console.dir(e.target)

    if(e.target.className === "delete-button") {
       
        console.log(e.target.parentElement.id)

        chrome.storage.local.get(["websites"], function(results) {
            
            for(let i = 0; i < results.websites.length; i++) {
                if(results.websites[i] === e.target.parentElement.id) {
                    results.websites.splice(i, 1)
                }
            }

            chrome.storage.local.set(results);
        })

        container.removeChild(e.target.parentElement)
    }
})

