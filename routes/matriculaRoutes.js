import { Router } from 'express';
const router = Router();

// Dados iniciais das matrículas (exemplo)
let matriculas = [
    {
        codMatricula: 'M001',
        data: '2023-01-15',
        dataCancelamento: null,
        motivoCancelamento: null,
    },
    {
        codMatricula: 'M002',
        data: '2023-02-10',
        dataCancelamento: null,
        motivoCancelamento: null,
    },
    {
        codMatricula: 'M003',
        data: '2023-03-05',
        dataCancelamento: '2023-03-20',
        motivoCancelamento: 'Mudança de cidade',
    }
];

// Rota para obter os dados de todas as matrículas
router.get('/matriculas', (req, res) => {
    res.json(matriculas);
});

// Rota para obter os dados de uma matrícula específica
router.get('/matricula/:codMatricula', (req, res) => {
    const { codMatricula } = req.params;
    const matricula = matriculas.find(m => m.codMatricula === codMatricula);

    if (matricula) {
        res.json(matricula);
    } else {
        res.status(404).json({ mensagem: 'Matrícula não encontrada' });
    }
});

// Rota para cadastrar uma nova matrícula
router.post('/matricula', (req, res) => {
    const novaMatricula = req.body;

    // Valide os dados da nova matrícula
    if (!novaMatricula.codMatricula || !novaMatricula.data) {
        return res.status(400).json({ mensagem: 'Código da Matrícula e data são obrigatórios.' });
    }

    // Adicione a nova matrícula aos dados existentes
    matriculas.push(novaMatricula);

    res.status(201).json({ mensagem: 'Matrícula cadastrada com sucesso!', matricula: novaMatricula });
});

// Rota para cancelar uma matrícula
router.put('/matricula/:codMatricula/cancelar', (req, res) => {
    const { codMatricula } = req.params;
    const index = matriculas.findIndex(m => m.codMatricula === codMatricula);

    if (index !== -1) {
        const { dataCancelamento, motivoCancelamento } = req.body;
        matriculas[index].dataCancelamento = dataCancelamento;
        matriculas[index].motivoCancelamento = motivoCancelamento;
        res.json({ mensagem: 'Matrícula cancelada com sucesso!', matricula: matriculas[index] });
    } else {
        res.status(404).json({ mensagem: 'Matrícula não encontrada' });
    }
});

export default router;