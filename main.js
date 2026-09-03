const numeroSenha = document.querySelector('.parametro-senha__texto')
const numeroSenha = document.querySelector('#campo-senha')

campoSenha.value = 'Aqui vai aparecer a senha'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'

let numeros = '123456789'

let simbolos = '!@#$%¨&*'

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha; 

const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuir;

function diminuir(){
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha
}