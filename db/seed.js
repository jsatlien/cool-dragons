const sequelize = require('../config/connection');
require('../models');
const Dragon = require('../models/Dragon');
const Character = require('../models/Character');
//import a user so we can insert a single "test user" for our one-day-website
const User = require('../models/User');

sequelize.sync({ force: true }).then(() => {
    console.log('Seeding the db...');
    Dragon.bulkCreate([
        {
            name: 'Viserion',
            description: 'A big goldish-colored dragon. Brought to you by Daenarys Targaryen',
            rider: 'Night King',
            color: 'Gold',
            age: 10
        },
        {
            name: 'Rhaegal',
            description: 'A big green dragon. Brought to you by Daenarys Targaryen',
            rider: 'John Snow',
            color: 'Green',
            age: 10
        },
        {
            name: 'Balerion',
            description: 'Biggest dragon ever. Also known as "The Black Dread"',
            rider: 'Aegon the Conqueror',
            color: 'Black',
            age: 100
        },
        {
            name: 'Caraxes',
            description: 'A big red dragon. It has cool pointy eyebrows',
            rider: 'Daemon Targaryen',
            color: 'Red'
        }
    ])
        .then(createdDragons => {
            console.log('Dragon data seeded!');
            //console.log(createdDragons);
            return Character.bulkCreate([
                {
                    first_name: 'Jon',
                    last_name: 'Snow',
                    title: 'The Bahstahd',
                    house: 'Stark',
                },
                {
                    first_name: 'Aegon',
                    last_name: 'Targaryen',
                    title: 'Aegon the Conqueror',
                    house: 'Targaryen'
                },
                {
                    first_name: 'Daenerys',
                    last_name: 'Targaryen',
                    title: 'Khaleesi',
                    house: 'Targaryen'
                }
            ])
        })
        .then(createdCharacters => {
            console.log('Character data seeded!');
            //console.log(createdCharacters)
            return User.create({
                username: 'ultimateGOTfan1',
                email: 'bob@test.com',
                password: 'password123',
            });
        })
        .then(createdUser => {
            console.log('User data seeded!');
            process.exit(); //end the node process after we're done to make the terminal window useable again
        })
        .catch((err) => {
            console.log('Error seeding the db:');
            console.log(err);
        });


});






