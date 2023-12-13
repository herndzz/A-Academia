import { Router } from 'express';
const router = Router();

// Dados da unidade da academia
let unidades = [
    {
        cnpj: 'seu_cnpj',
        nome: 'Nome da Academia',
        razaoSocial: 'Razão Social da Academia',
        endereco: 'Endereço da Academia',
        bairro: 'Bairro da Academia',
        cep: 'CEP da Academia',
        telefone: 'Telefone da Academia',
        email: 'email@da.academia'
    },
    {
        cnpj: 'seu_cnpj2',
        nome: 'Nome da Academia2',
        razaoSocial: 'Razão Social da Academia2',
        endereco: 'Endereço da Academia2',
        bairro: 'Bairro da Academia2',
        cep: 'CEP da Academia2',
        telefone: 'Telefone da Academia2',
        email: 'email@da.academia2'
    },
    {
        cnpj: 'seu_cnpj3',
        nome: 'Nome da Academia3',
        razaoSocial: 'Razão Social da Academia3',
        endereco: 'Endereço da Academia3',
        bairro: 'Bairro da Academia3',
        cep: 'CEP da Academia3',
        telefone: 'Telefone da Academia3',
        email: 'email@da.academia3'
    }
];

// Rota para obter os dados de todas as unidades
router.get('/unidades', (req, res) => {
    res.json(unidades);
});

// Rota para obter os dados de uma unidade específica
router.get('/unidade/:cnpj', (req, res) => {
    const { cnpj } = req.params;
    const unidade = unidades.find(u => u.cnpj === cnpj);

    if (unidade) {
        res.json(unidade);
    } else {
        res.status(404).json({ mensagem: 'Unidade não encontrada' });
    }
});

// Rota para adicionar uma nova unidade
router.post('/unidade', (req, res) => {
    const novaUnidade = req.body;

    // Valide os dados da nova unidade
    if (!novaUnidade.cnpj || !novaUnidade.nome || !novaUnidade.endereco) {
        return res.status(400).json({ mensagem: 'CNPJ, nome e endereço são obrigatórios.' });
    }

    // Adicione a nova unidade aos dados existentes
    unidades.push(novaUnidade);

    res.status(201).json({ mensagem: 'Unidade adicionada com sucesso!', unidade: novaUnidade });
});

// Rota para atualizar os dados de uma unidade
router.put('/unidade/:cnpj', (req, res) => {
    const { cnpj } = req.params;
    const index = unidades.findIndex(u => u.cnpj === cnpj);

    if (index !== -1) {
        const updatedUnidade = req.body;
        unidades[index] = { ...unidades[index], ...updatedUnidade };
        res.json({ mensagem: 'Unidade atualizada com sucesso!', unidade: unidades[index] });
    } else {
        res.status(404).json({ mensagem: 'Unidade não encontrada' });
    }
});

// Rota para desativar uma unidade
router.delete('/unidade/:cnpj', (req, res) => {
    const { cnpj } = req.params;
    const index = unidades.findIndex(u => u.cnpj === cnpj);

    if (index !== -1) {
        // Simplesmente marcamos a unidade como inativa
        unidades[index].ativa = false;
        res.json({ mensagem: 'Unidade desativada com sucesso!' });
    } else {
        res.status(404).json({ mensagem: 'Unidade não encontrada' });
    }
});

export default router;