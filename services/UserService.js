//const User = require('../src/db/models/user')
const User = require('../src/db/models/user');

class UserService {
    static async getAllUsers() {
        return User.findAll();
    }
}

module.exports = UserService;