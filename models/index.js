//import model files
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./user');

//establish model relations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Comment,
    as: 'post_comment',

    foreignKey: 'user_id',
    onDelete:'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

Post.belongsToMany(User, {
    through: Comment,
    as:'post_comment',

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {Post, User, Comment}