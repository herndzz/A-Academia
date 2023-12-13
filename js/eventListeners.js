import resTemplate from "./responseTemplate.js";
import showInputs from "./showInputs.js";
import crudAction from "./crudAction.js";

const actionSelect = document.getElementById('crudActions');
const tableSelect = document.getElementById('tableOptions');
const checkBox = document.getElementById('checkboxFetchAll');
const resDiv = document.getElementById('resultado');
const btnBuscar = document.getElementById('btnExecutar');
let getTable = '';

// Ouvintes de Eventos
actionSelect.addEventListener('change', () => {
    const opcaoSelecionada = actionSelect.value;
    switch (opcaoSelecionada) {
        case 'cadastrar':
            showInputs('');
            break;
        case 'buscar':
            showInputs('inputPK');
            break;
        /*case 'atualizar':
            showInputs('inputPK');
            break;*/
        case 'deletar':
            showInputs('inputPK');
            break;
    }

    console.log('Opção selecionada:', opcaoSelecionada);
});
tableSelect.addEventListener('change', exibirOcultarCampos);
btnBuscar.addEventListener('click', executeSelectAction);
document.getElementById('btnLimpar').addEventListener('click', () => {
    const inputs = document.querySelectorAll('input');

    checkBox.checked = false;
    inputs.forEach(input => {
        input.value = '';
    });

}); 
document.getElementById('btnLimparResulatdo').addEventListener('click', () => {
    resDiv.innerHTML = '';
});
checkBox.addEventListener('click', () => {
    const searchByIdInput = document.getElementById('inputForSearch');
    if (!checkBox.checked) {
        searchByIdInput.classList.remove('hideInputs');
    } else {
        searchByIdInput.classList.add('hideInputs');
    }
});

function executeSelectAction() {
    if (checkBox.checked && actionSelect.value === 'buscar') {
        crudAction.getAll(resDiv, resTemplate[getTable], getTable);
    } else if (!checkBox.checked && actionSelect.value === 'buscar') {
        crudAction.getOne(resDiv, resTemplate[getTable], getTable);
    } else if (actionSelect.value === 'deletar') {
        crudAction.delete(resDiv, getTable);
    } else if (actionSelect.value === 'cadastrar') {
        const opcaoSelecionada = tableSelect.value;
        crudAction.post(resDiv, getTable, opcaoSelecionada);
    }
}

function exibirOcultarCampos() {
    const opcaoSelecionada = tableSelect.value;
    switch (opcaoSelecionada) {
        case 'aluno':
            showInputs('inputsAluno');
            getTable = 'alunos';
            break;
        case 'atividade':
            showInputs('inputsAtividade');
            getTable = 'atividades';
            break;
        case 'matricula':
            showInputs('inputsMatricula');
            getTable = 'matriculas';
            break;
        case 'mensalidade':
            showInputs('inputsMensalidade');
            getTable = 'mensalidades';
            break;
        case 'pessoa':
            showInputs('inputsPessoa');
            getTable = 'pessoas';
            break;
        case 'professor':
            showInputs('inputsProfessor');
            getTable = 'professores';
            break;
        case 'turma':
            showInputs('inputsTurma');
            getTable = 'turmas';
            break;
        case 'unidade':
            showInputs('inputsUnidade');
            getTable = 'unidades';
            break;
    }
    // console.log('Opção selecionada:', opcaoSelecionada);
}