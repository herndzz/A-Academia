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