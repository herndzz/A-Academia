import { Router } from 'express';
const router = Router();

// Dados iniciais das pessoas (exemplo)
let pessoas = [
    {
        cpf: '123.456.789-01',
        nome: 'Fulano de Tal',
        endereco: 'Rua X, 123',
        bairro: 'Centro',
        cep: '12345-678',
        telefone: '9876-5432',
        celular: '98765-4321',
        email: 'fulano@example.com',
        dataNasc: '1980-05-20',
        sexo: 'M',
    },
    {
        cpf: '234.567.890-12',
        nome: 'Ciclana da Silva',
        endereco: 'Rua Y, 456',
        bairro: 'Bairro Novo',
        cep: '54321-876',
        telefone: '1234-5678',
        celular: '12345-6789',
        email: 'ciclana@example.com',
        dataNasc: '1992-10-15',
        sexo: 'F',
    }
];

// Rota para obter os dados de todas as pessoas
router.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

// Rota para obter os dados de uma pessoa específica
router.get('/pessoa/:cpf', (req, res) => {
    const { cpf } = req.params;
    const pessoa = pessoas.find(p => p.cpf === cpf);

    if (pessoa) {
        res.json(pessoa);
    } else {
        res.status(404).json({ mensagem: 'Pessoa não encontrada' });
    }
});

// Rota para cadastrar uma nova pessoa
router.post('/pessoa', (req, res) => {
    const novaPessoa = req.body;

    // Valide os dados da nova pessoa
    if (!novaPessoa.cpf || !novaPessoa.nome || !novaPessoa.endereco || !novaPessoa.cep || !novaPessoa.telefone || !novaPessoa.celular || !novaPessoa.email || !novaPessoa.dataNasc || !novaPessoa.sexo) {
        return res.status(400).json({ mensagem: 'CPF, nome, endereço, CEP, telefone, celular, email, data de nascimento e sexo são obrigatórios.' });
    }

    // Adicione a nova pessoa aos dados existentes
    pessoas.push(novaPessoa);

    res.status(201).json({ mensagem: 'Pessoa cadastrada com sucesso!', pessoa: novaPessoa });
});

// Rota para atualizar os dados de uma pessoa
router.put('/pessoa/:cpf', (req, res) => {
    const { cpf } = req.params;
    const index = pessoas.findIndex(p => p.cpf === cpf);

    if (index !== -1) {
        const updatedPessoa = req.body;
        pessoas[index] = { ...pessoas[index], ...updatedPessoa };
        res.json({ mensagem: 'Dados da pessoa atualizados com sucesso!', pessoa: pessoas[index] });
    } else {
        res.status(404).json({ mensagem: 'Pessoa não encontrada' });
    }
});

export default router;
