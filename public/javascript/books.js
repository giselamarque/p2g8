function bookSearch() {
    var search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log(search)

    $.ajax({
        dataType: 'json',
        url:'https://www.googleapis.com/books/v1/volumes?q=:' + search ,

        success: function(data) {
            for (i = 0; i < data.items.length; i++) {
                results.innerHTML += "<h3>" + data.items[i].volumeInfo.title + "</h3>"
                results.innerHTML += "<h4>" + data.items[i].volumeInfo.authors[0] + "</h4>"
                results.innerHTML += "<h5>" + data.items[i].volumeInfo.description + "</h5>"
            }
        },

        type: 'GET'
      });
    }

document.getElementById('search-btn').addEventListener('submit', bookSearch, false)