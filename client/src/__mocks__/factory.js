const faker = require('faker')

const factory = {
  makeUsers: (options, amount = 1) => {
    const users = []

    if (options && Object.keys(options).length !== 0) {
      users.push({
        username: options?.username || faker.name.firstName(),
        email: options?.email || faker.internet.email(),
        password: options?.password || faker.internet.password()
      })
    }

    for (let i = 0; i < amount; i++) {
      users.push({
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      })
    }

    return users
  }
}

module.exports = factory
