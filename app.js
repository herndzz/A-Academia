import express from "express";
import cors from 'cors';
import router from "./routes/unidadeRoutes.js";

const app = express();
const PORT = 3333;

// Middleware para processar solicitações JSON
app.use(express.json());
app.use(cors());

// Usa as rotas da academia
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}.`)
})



/* Rota de exemplo
app.get('/', (req, res) => {
    res.send('Bem-vindo à sua API Express!');
}); */
