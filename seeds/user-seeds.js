const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = [
    {
        username: 'sleepeeHallow',
        email: 'yoyo@gmail.com',
        password:"1234asd"
    },
    {
        username: 'manman34',
        email:'lazyeye@rsdf.com',
        password: 'asdfsdff3434'
    },
    {
        username:'goku',
        email:'darnit@ymakd.com',
        password:'jibouv7780,'
    },
    {
        username:'johndoe',
        email:'Defarealemail@madeup.com',
        password:'sodlhfp374'
    },
    {
        username:'shrek',
        email:'shrekandfiona@swamp.com',
        password:'onions'
    },
    {
        username:'cablelarry',
        email:'bluecollar@rustic.org',
        password:'sdfh3843'
    },
    {
        username:'Morty_281',
        email:'evilmorty@ahhgees.com',
        password:'hsdfe323'
    },
    {
        username:'ScarySully',
        email:'screamking@monsters.inc',
        password:'boo!321'
    }

];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers;