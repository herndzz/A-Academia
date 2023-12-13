import { Router } from 'express';
const router = Router();

// Dados iniciais das mensalidades (exemplo)
let mensalidades = [
    {
        codMensalidade: 'MM001',
        dataVencimento: '2023-01-05',
        valor: 100.00,
        acrescimo: 10.00,
        dataPgto: '2023-01-10',
        situacao: 'Paga',
    },
    {
        codMensalidade: 'MM002',
        dataVencimento: '2023-02-05',
        valor: 100.00,
        acrescimo: 10.00,
        dataPgto: null,
        situacao: 'Pendente',
    },
    {
        codMensalidade: 'MM003',
        dataVencimento: '2023-03-05',
        valor: 100.00,
        acrescimo: 10.00,
        dataPgto: null,
        situacao: 'Pendente',
    }
];

// Rota para obter os dados de todas as mensalidades
router.get('/mensalidades', (req, res) => {
    res.json(mensalidades);
});

// Rota para obter os dados de uma mensalidade específica
router.get('/mensalidade/:codMensalidade', (req, res) => {
    const { codMensalidade } = req.params;
    const mensalidade = mensalidades.find(m => m.codMensalidade === codMensalidade);

    if (mensalidade) {
        res.json(mensalidade);
    } else {
        res.status(404).json({ mensagem: 'Mensalidade não encontrada' });
    }
});

// Rota para cadastrar uma nova mensalidade
router.post('/mensalidade', (req, res) => {
    const novaMensalidade = req.body;

    // Valide os dados da nova mensalidade
    if (!novaMensalidade.codMensalidade || !novaMensalidade.dataVencimento || !novaMensalidade.valor || !novaMensalidade.situacao) {
        return res.status(400).json({ mensagem: 'Código da Mensalidade, data de vencimento, valor e situação são obrigatórios.' });
    }

    // Adicione a nova mensalidade aos dados existentes
    mensalidades.push(novaMensalidade);

    res.status(201).json({ mensagem: 'Mensalidade cadastrada com sucesso!', mensalidade: novaMensalidade });
});

// Rota para atualizar os dados de uma mensalidade
router.put('/mensalidade/:codMensalidade', (req, res) => {
    const { codMensalidade } = req.params;
    const index = mensalidades.findIndex(m => m.codMensalidade === codMensalidade);

    if (index !== -1) {
        const mensalidadeAtualizada = req.body;
        mensalidades[index] = { ...mensalidades[index], ...mensalidadeAtualizada };
        res.json({ mensagem: 'Dados da mensalidade atualizados com sucesso!', mensalidade: mensalidades[index] });
    } else {
        res.status(404).json({ mensagem: 'Mensalidade não encontrada' });
    }
});

// Rota para remover uma mensalidade
router.delete('/mensalidade/:codMensalidade', (req, res) => {
    const { codMensalidade } = req.params;
    const index = mensalidades.findIndex(m => m.codMensalidade === codMensalidade);

    if (index !== -1) {
        const mensalidadeRemovida = mensalidades.splice(index, 1)[0];
        res.json({ mensagem: 'Mensalidade removida com sucesso!', mensalidade: mensalidadeRemovida });
    } else {
        res.status(404).json({ mensagem: 'Mensalidade não encontrada' });
    }
});


export default router;
