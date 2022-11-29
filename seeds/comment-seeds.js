const sequelize = require("../config/connection");
const {Comment} = require("../models");

const commentData = [
    {
        comment_text:"Wow  Amazing!",
        user_id: 1,
        post_id: 16
    },
    {
        comment_text:"Great Read!",
        user_id: 2,
        post_id:15
    },
    {
        comment_text:"10 out of 10!",
        user_id: 3,
        post_id: 14
    },
    {
        comment_text:"Recommend!",
        user_id: 5,
        post_id: 13
    },
    {
        comment_text:"Garbage....",
        user_id: 6,
        post_id: 12
    },
    {
        comment_text:"I cant read so....",
        user_id: 7,
        post_id: 11
    },
    {
        comment_text:"Pretty good book",
        user_id: 8,
        post_id: 10
    },

];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
