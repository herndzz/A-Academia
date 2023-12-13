import { Router } from 'express';
const router = Router();

// Dados iniciais das turmas (exemplo)
let turmas = [
    {
        codTurma: 'T001',
        horario: 'Segunda e Quarta, 18:00-19:30',
        aulasSemana: 2,
        capacidade: 20,
        qtdeAlunos: 15,
    },
    {
        codTurma: 'T002',
        horario: 'Terça e Quinta, 10:00-11:30',
        aulasSemana: 2,
        capacidade: 15,
        qtdeAlunos: 12,
    },
    {
        codTurma: 'T003',
        horario: 'Sábado, 14:00-16:00',
        aulasSemana: 1,
        capacidade: 25,
        qtdeAlunos: 20,
    }
];

// Rota para obter os dados de todas as turmas
router.get('/turmas', (req, res) => {
    res.json(turmas);
});

// Rota para obter os dados de uma turma específica
router.get('/turma/:codTurma', (req, res) => {
    const { codTurma } = req.params;
    const turma = turmas.find(t => t.codTurma === codTurma);

    if (turma) {
        res.json(turma);
    } else {
        res.status(404).json({ mensagem: 'Turma não encontrada' });
    }
});

// Rota para cadastrar uma nova turma
router.post('/turma', (req, res) => {
    const novaTurma = req.body;

    // Valide os dados da nova turma
    if (!novaTurma.codTurma || !novaTurma.horario || !novaTurma.aulasSemana || !novaTurma.capacidade) {
        return res.status(400).json({ mensagem: 'Código da Turma, horário, aulas por semana e capacidade são obrigatórios.' });
    }

    // Adicione a nova turma aos dados existentes
    turmas.push(novaTurma);

    res.status(201).json({ mensagem: 'Turma cadastrada com sucesso!', turma: novaTurma });
});

// Rota para cancelar uma turma
router.delete('/turma/:codTurma', (req, res) => {
    const { codTurma } = req.params;
    const index = turmas.findIndex(t => t.codTurma === codTurma);

    if (index !== -1) {
        // Remova a turma
        turmas.splice(index, 1);
        res.json({ mensagem: 'Turma cancelada com sucesso!' });
    } else {
        res.status(404).json({ mensagem: 'Turma não encontrada' });
    }
});

export default router;
