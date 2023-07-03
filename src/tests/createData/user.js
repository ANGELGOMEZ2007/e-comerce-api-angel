const User = require('../../models/User')

const user = async () => {
  const userCreate = {
    firstName: 'angel',
    lastName: 'gomez',
    email: 'angel@gmail.com',
    password: 'angel123',
    phone: '+584241290916'
  }

  await User.create(userCreate)
}
module.exports = user
