import { Router } from 'express';
const router = Router();

// Dados iniciais dos alunos (exemplo)
let alunos = [
    {
        cpf: '123.456.789-01',
        nome: 'Dom Pedro II do Brasil',
        endereco: 'Rua Getúlio Vargas, 123',
        cep: '12345-678',
        telefone: '1234-5678',
        celular: '98765-4321',
        email: 'pedro@example.com',
        dataNasc: '1990-01-01',
        sexo: 'M',
    },
    {
        cpf: '234.567.890-12',
        nome: 'Maria Oliveira',
        endereco: 'Rua B, 456',
        cep: '56789-012',
        telefone: '8765-4321',
        celular: '5432-1098',
        email: 'maria@example.com',
        dataNasc: '1985-05-15',
        sexo: 'F',
    }
];

// Rota para obter os dados de todos os alunos
router.get('/alunos', (req, res) => {
    res.json(alunos);
});

// Rota para obter os dados de um aluno específico
router.get('/aluno/:cpf', (req, res) => {
    const { cpf } = req.params;
    const aluno = alunos.find(a => a.cpf === cpf);

    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
});

// Rota para cadastrar um novo aluno
router.post('/aluno', (req, res) => {
    const novoAluno = req.body;

    // Valide os dados do novo aluno
    if (!novoAluno.cpf || !novoAluno.nome || !novoAluno.endereco || !novoAluno.cep || !novoAluno.telefone || !novoAluno.celular || !novoAluno.email || !novoAluno.dataNasc || !novoAluno.sexo) {
        return res.status(400).json({ mensagem: 'CPF, nome, endereço, CEP, telefone, celular, email, data de nascimento e sexo são obrigatórios.' });
    }

    // Adicione o novo aluno aos dados existentes
    alunos.push(novoAluno);

    res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso!', aluno: novoAluno });
});

// Rota para atualizar os dados de um aluno
router.put('/aluno/:cpf', (req, res) => {
    const { cpf } = req.params;
    const index = alunos.findIndex(a => a.cpf === cpf);

    if (index !== -1) {
        const updatedAluno = req.body;
        alunos[index] = { ...alunos[index], ...updatedAluno };
        res.json({ mensagem: 'Dados do aluno atualizados com sucesso!', aluno: alunos[index] });
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
});

// Rota para remover um aluno
router.delete('/aluno/:cpf', (req, res) => {
    const { cpf } = req.params;
    const index = alunos.findIndex(a => a.cpf === cpf);

    if (index !== -1) {
        const alunoRemovido = alunos.splice(index, 1)[0];
        res.json({ mensagem: 'Aluno removido com sucesso!', aluno: alunoRemovido });
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
});

export default router;
