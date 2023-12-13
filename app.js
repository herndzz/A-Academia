import express from "express";
import cors from 'cors';
import alunosRoutes from "./routes/alunosRoutes.js";
import atividadeRoutes from "./routes/atividadeRoutes.js";
import matriculaRoutes from "./routes/matriculaRoutes.js";
import mensalidadeRoutes from "./routes/mensalidadeRoutes.js";
import pessoaRoutes from "./routes/pessoaRoutes.js";
import professorRoutes from "./routes/professorRoutes.js";
import turmasRoutes from "./routes/turmasRoutes.js";
import unidadeRoutes from "./routes/unidadeRoutes.js";

const app = express();
const PORT = 3333;

// Middleware para processar solicitações JSON
app.use(express.json());
app.use(cors());

// Usa as rotas da academia
app.use('/', alunosRoutes);
app.use('/', atividadeRoutes);
app.use('/', matriculaRoutes);
app.use('/', mensalidadeRoutes);
app.use('/', pessoaRoutes);
app.use('/', professorRoutes);
app.use('/', turmasRoutes);
app.use('/', unidadeRoutes);

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Bem-vindo à API da A Academia!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}.`)
})
