let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let mensagem = document.querySelector('#mensagem');

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;


const validaNome = () => {
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3 && nome.value.length !== 0) {
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'rgb(192, 43, 43)'
    }
    else if (nome.value.length == 0) {
        txtNome.innerHTML = ''
    }
    else {
        txtNome.style.color = 'green'
        txtNome.innerHTML = 'nome válido'
        nomeOk = true

    }
}

const validaEmail = () => {
    let txtEmail = document.querySelector('#txtEmail');
    if ((email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) && email.value.length !== 0) {
        txtEmail.innerHTML = 'e-mail inválido'
        txtEmail.style.color = 'rgb(192, 43, 43)'
    }
    else if (email.value.length == 0) {
        txtEmail.innerHTML = '';
    }
    else {
        txtEmail.style.color = 'green'
        txtEmail.innerHTML = 'e-mail válido'
        emailOk = true

    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem');
    // let botaoEnviar = document.querySelector('#enviar');

    if (mensagem.value.length > 100 && mensagem.value.length !== 0) {
        txtMensagem.style.color = 'rgb(192, 43, 43)'
        // botaoEnviar.style.marginTop = '30px';
        txtMensagem.innerHTML = 'Por favor, digite no máximo 100 caracteres'
        mensagemOk = false;
    }
    else {
        txtMensagem.innerHTML = ''
        mensagemOk = true;
    }

}

function enviar() {
    // let txtNome = document.querySelector('#txtNome');
    // let txtEmail = document.querySelector('#txtEmail');
    // let txtMensagem = document.querySelector('#txtMensagem');

    // txtNome.innerHTML = ''
    // txtEmail.innerHTML = ''
    // txtMensagem.innerHTML = ''

    if (nomeOk == true && emailOk == true && mensagemOk == true) {

        alert('Formulário enviado com sucesso')
    }
    else {
        alert('Por favor, preencha o formulário corretamente ')
    }
}