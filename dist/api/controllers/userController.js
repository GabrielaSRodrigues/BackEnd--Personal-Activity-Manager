"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// Supondo que exista uma função `createUser` importada de algum serviço ou repositório
const userService_1 = require("../services/userService");
class UserController {
    async handleUser(req, res) {
        try {
            const dataUser = {
                id : 0,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };
            const userCreated = await (0, userService_1.createUser)(dataUser);
            res.status(201).json(userCreated);
        }
        catch (error) {
            res.status(400).send("Falha ao criar usuário");
        }
    }
}
exports.UserController = UserController;
