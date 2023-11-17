/*
    Principais Requisições:

    1. Unidade(Cadastrar(), Desativar(), Atualizar())
    2. Turma(Cadastrar(), Cancelar())
    3. Professor(Cadastrar(), Desativar(), Atualizar())
    4. Matrícula(Realizar(), Cancelar(), Atualizar())
    5. Aluno((Cadastrar(), Desativar(), Atualizar()))
    6. Atividade(Cadastrar(), Desativar(), Atualizar())
    7. Pessoa
    8. Mensalidade(Gerar, Quita, Cancelar, Desconto)
*/

fetch(`https://apiexample.com/${unidade}/json/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                document.getElementById('resultado').innerHTML = 'CEP não encontrado ou erro na busca.'
                console.error(error);
            });

// Array para armazenar usuários cadastrados
let usuarios = [];

function cadastrarUsuario() {
    const nome = prompt('Digite seu nome:');
    const email = prompt('Digite seu email:');
    const senha = prompt('Digite sua senha:');

    // Verifica se o email já está cadastrado
    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
        alert('Usuário com este email já cadastrado. Por favor, tente novamente.');
        return;
    }

    // Cria um objeto de usuário
    const novoUsuario = {
        nome,
        email,
        senha
    };

    // Adiciona o usuário ao array
    usuarios.push(novoUsuario);

    alert('Cadastro realizado com sucesso!');
}

function fazerLogin() {
    const email = prompt('Digite seu email:');
    const senha = prompt('Digite sua senha:');

    // Verifica se o usuário existe
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}!`);
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
}

// Exemplo de utilização do cadastro e login
cadastrarUsuario();
fazerLogin();
