const faker = require('faker')

const users = (options, amount = 1) => {
  const users = []

  for (let i = 0; i < amount; i++) {
    users.push({
      username: options?.username || faker.name.firstName(),
      email: options?.email || faker.internet.email(),
      password: options?.password || faker.internet.password()
    })
  }

  return users
}

module.exports = users
