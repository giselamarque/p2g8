function bookSearch() {
    var search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log(search)

    $.ajax({
        dataType: 'json',
        url: 'https://www.googleapis.com/books/v1/volumes?q=:' + search ,

        success: function(data) {
            for (i = 0; i < data.items.length; i++) {
                results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
            }
        },

        type: 'GET'
      });

      $.ajax({
        dataType: 'json',
        url: 'https://www.googleapis.com/books/v1/volumes?q=:' + search ,

        success: function(data) {
            for (i = 0; i < data.items.length; i++) {
                results.innerHTML += "<h3>" + data.items[i].volumeInfo.authors[0] + "</h3>"
            }
        },

        type: 'GET'
      });

      $.ajax({
        dataType: 'json',
        url: 'https://www.googleapis.com/books/v1/volumes?q=:' + search ,

        success: function(data) {
            for (i = 0; i < data.items.length; i++) {
                results.innerHTML += "<img>" + data.items[i].volumeInfo.imageLinks.thumbnail + "</img>"
            }
        },

        type: 'GET'
      });
    }

document.getElementById('button').addEventListener('click', bookSearch, false)