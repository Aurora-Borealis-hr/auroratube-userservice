const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/userservice')


const User = require('./models/User.js');

const Faker = require('faker');

const numOfCycles = 270

function createUser() {
  return {
    username: `${Faker.name.firstName()}${Faker.name.lastName()}`,
    dob: `${Faker.date.past()}`,
    email: `${Faker.internet.email()}`,
    country: `${Faker.address.country()}`,
    state: `${Faker.address.state()}`,
    city: `${Faker.address.city()}`,
    subscriptions: [`${Faker.finance.account()}`, `${Faker.finance.account()}`],
    tags: [`${Faker.hacker.noun()}`, `${Faker.hacker.noun()}`]
  }
}

function insertArray(arrayOfUsers) {
      return new Promise(function(resolve, reject) {
        User.insertMany(arrayOfUsers, function(err, docs) {
          if(err) {
            reject(err);
          } else {
            resolve(docs)
          }
        })
      })
    }

async function insertUsers() {

  for(let i = 1; i <= numOfCycles; i ++) {

    let arrayOfUsers = [];

    for (let j = 0; j < 1000; j++) {
      let user = createUser();
      arrayOfUsers.push(user)
    }

    let inserts = await insertArray(arrayOfUsers);
    console.log(`${i * inserts.length} records inserted!!!!!!!!!!!`)
  }
}

insertUsers();

