const {Post} = require('../models');

const postData = [
    {
        title: "The Grass is Always Greener",
        author: "Jeffrey Archer ",
        isbn: "1-86092-049-7 ",
        user_id: 8 
    },
    {
        title: "Murder! ",
        author: "Arnold Bennett  ",
        isbn: "1-86092-012-8 ",
        user_id: 1 
    },   
    {
        title: "An Occurrence at Owl Creek Bridge One of the Missing",
        author: "Ambrose Bierce ",
        isbn: "1-86092-006-3",
        user_id: 2 
    },
    {
        title: "A Boy at Seven",
        author: "John Bidwell",
        isbn: "	1-86092-022-5",
        user_id: 3 
    },
    {
        title: "The Higgler",
        author: "A. E. Coppard ",
        isbn: "1-86092-010-1",
        user_id: 4 
    },
    {
        title: "The Great Switcheroo",
        author: "Roald Dahl",
        isbn: "1-86092-034-9",
        user_id: 5
    },
    {
        title: "The Speckled Band",
        author: "Sir Arthur Conan Doyle",
        isbn: "1-86092-003-9",
        user_id: 6 
    },
    {
        title: "The Signalman",
        author: "Charles Dickens",
        isbn: "1-86092-038-1",
        user_id: 7 
    },
    {
        title: "The Five Orange Pips ",
        author: "Arthur Conan Doyle",
        isbn: "1-86092-031-4",
        user_id: 7 
    },
    {
        title: "The Diamond as Big as the Ritz",
        author: "F. Scott Fitzgerald ",
        isbn: "1-86092-033-0",
        user_id: 6
    },
    {
        title: "From a View to a Kill",
        author: "Ian Fleming",
        isbn: "1-86092-055-1",
        user_id: 5 
    },
    {
        title: "The Hostage",
        author: "C. S. Forester ",
        isbn: "1-86092-014-4",
        user_id: 4 
    },
    {
        title: "A Chance for Mr Lever",
        author: "Graham Greene ",
        isbn: "1-86092-021-7",
        user_id: 3 
    },
    {
        title: "A Mere Interlude",
        author: "Thomas Hardy",
        isbn: "1-86092-045-4",
        user_id: 2
    },
    {
        title: "The Dancing Partner: Clocks ",
        author: "Jerome K. Jerome",
        isbn: "1-86092-050-0",
        user_id: 1 
    },
    {
        title: "The Rocking-Horse Winner",
        author: "D. H. Lawrence",
        isbn: "1-86092-007-1",
        user_id: 8
    },
];

const seedPost  = () => Post.bulkCreate(postData);
module.exports = seedPost;