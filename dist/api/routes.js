"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("./controllers/userController");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const userController = new userController_1.UserController();
userRouter.post('/', (req, res) => userController.handleUser(req, res));
