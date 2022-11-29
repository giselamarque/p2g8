function bookSearch() {
    var search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log(search)

    $.ajax( {
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search ,
        dataType: "json" ,

        success: function(data) {
            console.log(data)
        } ,
        typr: 'GET'
    }) ;
}
document.getElementById('button').addEventListener('click', booksearch, false)
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
