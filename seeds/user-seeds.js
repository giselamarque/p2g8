const sequelize = require('../config/connection');
const {User, Post} = require('../models');

const userData = [
    {
        username: 'sleepeeHallow56',
        email: 'yoyo@gmail.com',
        password:"12345678asd"
    },
    {
        username: 'manman34',
        email:'lazyeye@rsdf.com',
        password: 'asdfsdff3434321'
    },
    {
        username:'goku95',
        email:'darnit@ymakd.com',
        password:'jibouv774567'
    },
    {
        username:'johndoe87',
        email:'Defarealemail@madeup.com',
        password:'sodlhfp3744567'
    },
    {
        username:'shrek456',
        email:'shrekandfiona@swamp.com',
        password:'onions1234567'
    },
    {
        username:'cablelarry',
        email:'bluecollar@rustic.org',
        password:'sdfh3843122345'
    },
    {
        username:'Morty281',
        email:'evilmorty@ahhgees.com',
        password:'hsdfe32312345'
    },
    {
        username:'ScarySully',
        email:'screamking@monsters.inc',
        password:'boo32145678'
    }

];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers;