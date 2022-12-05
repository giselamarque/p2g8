async function bookSearch(event) {
    var search = document.getElementById('search-input').value
   var results = document.getElementById('search-results').innerHTML = ""
    c

    var apiUrl='https://www.googleapis.com/books/v1/volumes?q=:' + search ;
    await fetch(apiUrl)
        .then(respone => {
            respone.json()
        }) 
        .then(data => {
            console.log('its doing something 🤷🏾‍♂️')
            for (i = 0; i < data.items.length; i++) {
                var titleEl = document.createElement("h3") 
                var authorEl = document.createElement("h4")
                var descriptionEl = document.createElement("h5")

                titleEl.innerHTML =  data.items[i].volumeInfo.title
                authorEl.innerHTML = data.items[i].volumeInfo.authors[0]
                descriptionEl.innerHTML = data.items[i].volumeInfo.description

                results.appendChild(titleEl);
                results.appendChild(authorEl);
                results.appendChild(descriptionEl);
            }
            if(!data){
                console.log("somehthing is wrong ")
            }
        });

}


document.querySelector('.book-search-form').addEventListener('submit', bookSearch)