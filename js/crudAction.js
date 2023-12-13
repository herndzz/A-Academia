const crudAction = {
    getAll: function (resDiv, responseTemplate, table) {
        const apiUrl = `http://localhost:3333/${table}/`;
        
        axios.get(apiUrl)
            .then(res => {
                const dados = res.data;
                console.log(dados);                
                resDiv.innerHTML = responseTemplate(dados);
                console.log(resDiv, resDiv.innerHTML);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                resDiv.innerHTML = `<p>Erro nas requisições</p>`;
            });
    },
    getOne: function (resDiv, responseTemplate, table) {
        let regexTable = table === 'professores' ? table.replace(/es$/, '') : table.replace(/s$/, '');        
        const searchByIdInput = document.getElementById('inputForSearch');
        const apiUrl = `http://localhost:3333/${regexTable}/${searchByIdInput.value}/`;
        
        axios.get(apiUrl)
            .then(res => {
                const dados = res.data;
                console.log(dados);
                resDiv.innerHTML = responseTemplate([dados]);
                console.log(resDiv, resDiv.innerHTML);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                resDiv.innerHTML = `<p>Erro na requisição</p>`;
            });
    },
    delete: function (resDiv, table) {
        let regexTable = table === 'professores' ? table.replace(/es$/, '') : table.replace(/s$/, '');        
        const searchByIdInput = document.getElementById('inputForSearch');
        const apiUrl = `http://localhost:3333/${regexTable}/${searchByIdInput.value}/`;
        
        axios.delete(apiUrl)
            .then(res => {
                console.log('Recurso excluído com sucesso:', res.data);
                resDiv.innerHTML = `<p>Recurso excluído com sucesso</p>`;
            })
            .catch(error => {
                console.error('Erro ao excluir o recurso:', error);
                resDiv.innerHTML = `<p>Erro ao excluir o recurso</p>`;
            });
    },
    post: function(resDiv, table, opcaoSelecionada) {
        let regexTable = table === 'professores' ? table.replace(/es$/, '') : table.replace(/s$/, '');        
        const apiUrl = `http://localhost:3333/${regexTable}/`;
        
        const dadosParaEnviar = verifyJSON(opcaoSelecionada);
        console.log(dadosParaEnviar)

        axios.post(apiUrl, dadosParaEnviar)
            .then(response => {
                console.log('Requisição POST bem-sucedida:', response.data);
                resDiv.innerHTML = `<p>Requisição POST bem-sucedida</p>`;
            })
            .catch(error => {
                console.error('Erro na requisição POST:', error);
                resDiv.innerHTML = `<p>Erro na requisição POST</p>`;
            });

        function verifyJSON(optionVerify) {
            switch (optionVerify) {
                case 'aluno':
                    return {
                        cpf: document.getElementById('cpfAluno').value,
                        nome: document.getElementById('nomeAluno').value,
                        endereco: document.getElementById('enderecoAluno').value,
                        cep: document.getElementById('cepAluno').value,
                        telefone: document.getElementById('telAluno').value,
                        celular: document.getElementById('celAluno').value,
                        email: document.getElementById('emailAluno').value,
                        dataNasc: document.getElementById('dataNascAluno').value,
                        sexo: document.getElementById('sexAluno').value,
                    }
                case 'atividade':
                    return {
                        codAtividade: document.getElementById('codAtividade').value,
                        tipoAtividade: document.getElementById('tipAtividade').value,
                        nomeAtividade: document.getElementById('nomeAtividade').value,
                    }
                case 'matricula':
                    return {
                        codMatricula: document.getElementById('codMatricula').value,
                        data: document.getElementById('dataMatricula').value,
                        dataCancelamento: null,
                        motivoCancelamento: null,
                    }
                case 'mensalidade':
                    return {
                        codMensalidade: document.getElementById('codMensalidade').value,
                        dataVencimento: document.getElementById('dataVencMensalidade').value,
                        valor: document.getElementById('valorMensalidade').value,
                        acrescimo: null,
                        dataPgto: null,
                        situacao: document.getElementById('situacaoMensalidade').value,
                    }
                case 'pessoa':
                    return {
                        cpf: document.getElementById('cpfPessoa').value,
                        nome: document.getElementById('nomePessoa').value,
                        endereco: document.getElementById('enderecoPessoa').value,
                        bairro: null,
                        cep: document.getElementById('cepPessoa').value,
                        telefone: document.getElementById('telPessoa').value,
                        celular: document.getElementById('celPessoa').value,
                        email: document.getElementById('emailPessoa').value,
                        dataNasc: document.getElementById('dataNascPessoa').value,
                        sexo: document.getElementById('sexPessoa').value,
                    }
                case 'professor':
                    return {
                        cref: document.getElementById('crefProf').value,
                        remuneracao: document.getElementById('remuneracaoProf').value,
                        dataInicio: document.getElementById('dataInicioProf').value,
                        dataTermino: null,
                        status: null,
                    }
                case 'turma':
                    return {
                        codTurma: document.getElementById('codTurma').value,
                        horario: document.getElementById('horarioTurma').value,
                        aulasSemana: document.getElementById('AulaSemanaTurma').value,
                        capacidade: document.getElementById('capacidadeTurma').value,
                        qtdeAlunos: null,
                    }
                case 'unidade':
                    return {
                        cnpj: document.getElementById('cnpjUnidade').value,
                        nome: document.getElementById('nomeUnidade').value,
                        razaoSocial: null,
                        endereco: document.getElementById('enderecoUnidade').value,
                        bairro: null,
                        cep: null,
                        telefone: null,
                        email: null
                    }
                // console.log('Opção selecionada:', opcaoSelecionada);
            }
        }
    }
}

export default crudAction;