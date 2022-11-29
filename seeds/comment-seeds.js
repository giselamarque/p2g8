const sequelize = require("../config/connection");
const {Comment} = require("../models");

const commentData = [
    {
        comment_text:"Wow  Amazing!",
        user_id: 8,
        post_id: 16
    },
    {
        comment_text:"Great Read!",
        user_id: 8,
        post_id:15
    },
    {
        comment_text:"10 out of 10!",
        user_id: 8,
        post_id: 14
    },
    {
        comment_text:"Recommend!",
        user_id: 8,
        post_id: 13
    },
    {
        comment_text:"Garbage....",
        user_id: 8,
        post_id: 12
    },
    {
        comment_text:"I cant read so....",
        user_id: 1,
        post_id: 11
    },
    {
        comment_text:"Pretty good book",
        user_id: 1,
        post_id: 10
    },
    {
        comment_text:"Dont reccomend",
        user_id: 1,
        post_id: 9
    },
    {
        comment_text:"Save your money",
        user_id:1, 
        post_id: 8
    },
    {
        comment_text:"Im  reading this again!",
        user_id: 2,
        post_id: 7
    },
    {
        comment_text:"This should be a movie",
        user_id: 2,
        post_id:6
    },
    {
        comment_text:"Thumbs up!",
        user_id: 2,
        post_id:5
    },
    {
        comment_text:"Coiuldn't stay awake",
        user_id: 2,
        post_id:4
    },
    {
        comment_text:"Def needs a sequel",
        user_id: 2,
        post_id:3
    },
    {
        comment_text:"Borringgg",
        user_id: 3,
        post_id:2
    },
    {
        comment_text:"worth every penny",
        user_id: 3,
        post_id:1
    },
    {
        comment_text:"well im never getting that time back...",
        user_id: 3,
        post_id:1
    },
    {
        comment_text:"Just wow",
        user_id: 3,
        post_id:2
    },
    {
        comment_text:"regifting this one for sure",
        user_id: 3,
        post_id:3
    },
    {
        comment_text:"Worth the read",
        user_id: 4,
        post_id:4
    },
    {
        comment_text:"My favorite book",
        user_id: 4,
        post_id:5
    },
    {
        comment_text:"Never disapoints",
        user_id: 4,
        post_id:6
    },
    {
        comment_text:"So good",
        user_id: 4,
        post_id:7
    },
    {
        comment_text:"I dont get it",
        user_id: 4,
        post_id:8
    },
    {
        comment_text:"Made you look haha",
        user_id: 5,
        post_id:9
    },
    {
        comment_text:"I liked it somewhat",
        user_id: 5,
        post_id:10
    },
    {
        comment_text:"maybe it wasnt for me",
        user_id: 5,
        post_id:11
    },
    {
        comment_text:"i want to burn it ",
        user_id: 5,
        post_id:12
    },
    {
        comment_text:"Now this i like",
        user_id: 5,
        post_id:13
    },
    {
        comment_text:"warning this sucks",
        user_id: 6,
        post_id:14
    },
    {
        comment_text:"great way to pass time",
        user_id: 6,
        post_id:15
    },
    {
        comment_text:"Still confused",
        user_id: 6,
        post_id:16
    },
    {
        comment_text:"Def is gonna be a coaster",
        user_id: 6,
        post_id:16
    },
    {
        comment_text:"long read",
        user_id: 6,
        post_id:15
    },
    {
        comment_text:"this was amazing",
        user_id: 7,
        post_id:14
    },
    {
        comment_text:"brutally honest",
        user_id: 7,
        post_id:13
    },
    {
        comment_text:"this was longggggg",
        user_id: 7,
        post_id:12
    },
    {
        comment_text:"cool ending",
        user_id: 7,
        post_id:11
    },
    {
        comment_text:"Spoiler alert youre going to love it",
        user_id: 7,
        post_id:10
    },

];
const seedComments = () => Comment.bulkCreate(commentData);
modile.exports = seedComments;
