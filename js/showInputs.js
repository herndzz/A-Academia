function hideInputs() {
    const allInputs = document.querySelectorAll('.inputsBox');
    // console.log('Resultado dos Inputs: ', allInputs)
    allInputs.forEach((e) => {
        e.classList.remove('showInputs');
    });
}

function showInputs(inputId) {
    const currentInputsGroup = document.getElementById(inputId);
    // console.log(currentInputsGroup);
    hideInputs();
    currentInputsGroup.classList.add('showInputs');
}

export default showInputs;
