// SELECIONAR OS ELEMENTOS 
const form          = document.querySelector('form');
const nome          = document.querySelector("#nome");
const email         = document.querySelector("#email");
const assunto       = document.querySelector("#assunto");
const mensagem      = document.querySelector("#mensagem");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener('submit',(e)=> {
    e.preventDefault()
    validateInputs()
})

function setError(input,errorMessage) {
    const errorMessageElement = input.nextElementSibling;

    errorMessageElement.textContent = errorMessage;
}


function validateInputs() {
    // Trim - Tira os espaços em brancos
    const nomeValue = nome.value.trim()

    if(nomeValue === '') {
        setError(nome,"Nome não pode ficar em branco")
    }
}
