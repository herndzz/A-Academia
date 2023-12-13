import { Router } from 'express';
const router = Router();

// Dados iniciais das atividades (exemplo)
let atividades = [
    {
        codAtividade: 'A001',
        tipoAtividade: 'Aeróbica',
        nomeAtividade: 'Corrida',
    },
    {
        codAtividade: 'A002',
        tipoAtividade: 'Musculação',
        nomeAtividade: 'Levantamento de Peso',
    },
    {
        codAtividade: 'A003',
        tipoAtividade: 'Yoga',
        nomeAtividade: 'Alongamento',
    }
];

// Rota para obter os dados de todas as atividades
router.get('/atividades', (req, res) => {
    res.json(atividades);
});

// Rota para obter os dados de uma atividade específica
router.get('/atividade/:codAtividade', (req, res) => {
    const { codAtividade } = req.params;
    const atividade = atividades.find(a => a.codAtividade === codAtividade);

    if (atividade) {
        res.json(atividade);
    } else {
        res.status(404).json({ mensagem: 'Atividade não encontrada' });
    }
});

// Rota para cadastrar uma nova atividade
router.post('/atividade', (req, res) => {
    const novaAtividade = req.body;

    // Valide os dados da nova atividade
    if (!novaAtividade.codAtividade || !novaAtividade.tipoAtividade || !novaAtividade.nomeAtividade) {
        return res.status(400).json({ mensagem: 'Código da Atividade, tipo de atividade e nome da atividade são obrigatórios.' });
    }

    // Adicione a nova atividade aos dados existentes
    atividades.push(novaAtividade);

    res.status(201).json({ mensagem: 'Atividade cadastrada com sucesso!', atividade: novaAtividade });
});

// Rota para atualizar os dados de uma atividade
router.put('/atividade/:codAtividade', (req, res) => {
    const { codAtividade } = req.params;
    const index = atividades.findIndex(a => a.codAtividade === codAtividade);

    if (index !== -1) {
        const updatedAtividade = req.body;
        atividades[index] = { ...atividades[index], ...updatedAtividade };
        res.json({ mensagem: 'Dados da atividade atualizados com sucesso!', atividade: atividades[index] });
    } else {
        res.status(404).json({ mensagem: 'Atividade não encontrada' });
    }
});

// Rota para remover uma atividade
router.delete('/atividade/:codAtividade', (req, res) => {
    const { codAtividade } = req.params;
    const index = atividades.findIndex(a => a.codAtividade === codAtividade);

    if (index !== -1) {
        const atividadeRemovida = atividades.splice(index, 1)[0];
        res.json({ mensagem: 'Atividade removida com sucesso!', atividade: atividadeRemovida });
    } else {
        res.status(404).json({ mensagem: 'Atividade não encontrada' });
    }
});

export default router;
