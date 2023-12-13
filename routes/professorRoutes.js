import { Router } from 'express';
const router = Router();

// Dados iniciais dos professores (exemplo)
let professores = [
    {
        cref: 'P001',
        remuneracao: 5000.00,
        dataInicio: '2022-01-10',
        dataTermino: null,
        status: 'Ativo',
    },
    {
        cref: 'P002',
        remuneracao: 4500.00,
        dataInicio: '2022-02-15',
        dataTermino: '2022-12-31',
        status: 'Inativo',
    },
    {
        cref: 'P003',
        remuneracao: 4800.00,
        dataInicio: '2022-03-20',
        dataTermino: null,
        status: 'Ativo',
    }
];

// Rota para obter os dados de todos os professores
router.get('/professores', (req, res) => {
    res.json(professores);
});

// Rota para obter os dados de um professor específico
router.get('/professor/:cref', (req, res) => {
    const { cref } = req.params;
    const professor = professores.find(p => p.cref === cref);

    if (professor) {
        res.json(professor);
    } else {
        res.status(404).json({ mensagem: 'Professor não encontrado' });
    }
});

// Rota para adicionar um novo professor
router.post('/professor', (req, res) => {
    const novoProfessor = req.body;

    // Valide os dados do novo professor
    if (!novoProfessor.cref || !novoProfessor.remuneracao || !novoProfessor.dataInicio) {
        return res.status(400).json({ mensagem: 'CREF, remuneração e data de início são obrigatórios.' });
    }

    // Adicione o novo professor aos dados existentes
    professores.push(novoProfessor);

    res.status(201).json({ mensagem: 'Professor adicionado com sucesso!', professor: novoProfessor });
});

// Rota para atualizar os dados de um professor
router.put('/professor/:cref', (req, res) => {
    const { cref } = req.params;
    const index = professores.findIndex(p => p.cref === cref);

    if (index !== -1) {
        const updatedProfessor = req.body;
        professores[index] = { ...professores[index], ...updatedProfessor };
        res.json({ mensagem: 'Professor atualizado com sucesso!', professor: professores[index] });
    } else {
        res.status(404).json({ mensagem: 'Professor não encontrado' });
    }
});

// Rota para desativar um professor
router.delete('/professor/:cref', (req, res) => {
    const { cref } = req.params;
    const index = professores.findIndex(p => p.cref === cref);

    if (index !== -1) {
        // Simplesmente marcamos o professor como inativo
        professores[index].status = 'inativo';
        res.json({ mensagem: 'Professor desativado com sucesso!' });
    } else {
        res.status(404).json({ mensagem: 'Professor não encontrado' });
    }
});

export default router;
