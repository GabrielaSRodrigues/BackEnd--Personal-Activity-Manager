import app from "./app"
import http from 'http';
import { router } from './api/routes';
import cors from 'cors'
const PORT = 3002;

// Cria o servidor HTTP e usa o Express como middleware
const server = http.createServer(app);

// Use o roteador no caminho '/personal_manager/users'
app.use(cors())
app.use('/personal_manager', router);

// Inicia o servidor na porta especificada
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta localhost:${PORT}`);
})