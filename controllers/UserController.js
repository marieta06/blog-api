const UserService = require('../services/UserService');

class UserController {
    static async getAllUsers(req, res) {
        const users = await UserService.getAllUsers();
        res.status(200).send(users);
    }
}

module.exports = UserController;