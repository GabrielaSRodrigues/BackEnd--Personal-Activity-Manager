"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const routes_1 = require("./api/routes");
const PORT = 3000;
// Cria o servidor HTTP e usa o Express como middleware
const server = http_1.default.createServer(app_1.default);
// Use o roteador no caminho '/personal_manager/users'
app_1.default.use('/personal_manager/users', routes_1.userRouter);
// Inicia o servidor na porta especificada
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta localhost:${PORT}`);
});
