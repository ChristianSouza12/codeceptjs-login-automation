const { faker } = require('@faker-js/faker');

module.exports = {
  createUser() {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  },




    createUppercaseEmail() {
        return faker.internet.email().toUpperCase();
    }
  }