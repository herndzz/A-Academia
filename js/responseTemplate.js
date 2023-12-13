const responseTemplate = {
    alunos: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>CPF</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>CEP</th>
                <th>Telefone</th>
                <th>Celular</th>
                <th>Email</th>
                <th>Data de Nascimento</th>
                <th>Sexo</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.cpf}</td>
                <td>${i.nome}</td>
                <td>${i.endereco}</td>
                <td>${i.cep}</td>
                <td>${i.telefone}</td>
                <td>${i.celular}</td>
                <td>${i.email}</td>
                <td>${i.dataNasc}</td>
                <td>${i.sexo}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    },
    atividades: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>Código de Atividade</th>
                <th>Tipo de Atividade</th>
                <th>Nome da Atividade</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.codAtividade}</td>
                <td>${i.tipoAtividade}</td>
                <td>${i.nomeAtividade}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    },
    matriculas: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>Código de Matrícula</th>
                <th>Data de Matrícula</th>
                <th>Data de Cancelamento</th>
                <th>Motivo do Cancelamento</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.codMatricula}</td>
                <td>${i.data}</td>
                <td>${i.dataCancelamento}</td>
                <td>${i.motivoCancelamento}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    },
    mensalidades: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>Código de Mensalidade</th>
                <th>Data de Vencimento</th>
                <th>Valor</th>
                <th>Acréscimo</th>
                <th>Valor</th>
                <th>Data de Pagamento</th>
                <th>Situação</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.codMensalidade}</td>
                <td>${i.dataVencimento}</td>
                <td>${i.valor}</td>
                <td>${i.acrescimo}</td>
                <td>${i.dataPgto}</td>
                <td>${i.situacao}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    },
    pessoas: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>CPF</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>CEP</th>
                <th>Telefone</th>
                <th>Celular</th>
                <th>Email</th>
                <th>Data de Nascimento</th>
                <th>Sexo</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.cpf}</td>
                <td>${i.nome}</td>
                <td>${i.endereco}</td>
                <td>${i.bairro}</td>
                <td>${i.cep}</td>
                <td>${i.telefone}</td>
                <td>${i.celular}</td>
                <td>${i.email}</td>
                <td>${i.dataNasc}</td>
                <td>${i.sexo}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    },
    professores: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>CREF</th>
                <th>Remuneração</th>
                <th>Data de Início</th>
                <th>Data de Término</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.cref}</td>
                <td>${i.remuneracao}</td>
                <td>${i.dataInicio}</td>
                <td>${i.dataTermino}</td>
                <td>${i.status}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    },
    turmas: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>Código de Turma</th>
                <th>Hórario</th>
                <th>Aulas por Semana</th>
                <th>Capacidade</th>
                <th>Quantidade de Alunos</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.codTurma}</td>
                <td>${i.horario}</td>
                <td>${i.aulasSemana}</td>
                <td>${i.capacidade}</td>
                <td>${i.qtdeAlunos}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    },
    unidades: function(data) {
        let template = `<table border="1">
        <thead>
            <tr>
                <th>CNPJ</th>
                <th>Nome da Academia</th>
                <th>Razão Social</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>CEP</th>
                <th>Telefone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>`;
        data.forEach(i => {
            template += `<tr>
                <td>${i.cnpj}</td>
                <td>${i.nome}</td>
                <td>${i.razaoSocial}</td>
                <td>${i.endereco}</td>
                <td>${i.bairro}</td>
                <td>${i.cep}</td>
                <td>${i.telefone}</td>
                <td>${i.email}</td>
            </tr>`;
        });
        return template += '</tbody></table>';
    }
}

export default responseTemplate;