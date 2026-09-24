const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

const forcaSenha = document.querySelector(".forca")

campoSenha.value = 'Aqui vai aparecer a senha'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'

let numeros = '123456789'

let simbolos = '!@#$%¨&*'

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha; 

const checkbox = document.querySelectorAll(".checkbox")

for(let i = 0; i < checkbox.length; i++){
    checkbox[i].onclick =geraSenha;
}

const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuir;

function diminuir(){

    if(tamanhoSenha > 0){
        tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha
    geraSenha()
    }

    
}

botoes[1].onclick = aumentar;

function aumentar(){

    if(tamanhoSenha < 20){
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha
    geraSenha()
    }
}

geraSenha()

function geraSenha(){
    let senha = ''
    for(let i = 0; i < tamanhoSenha; i ++){
        let numeroAleatorio = Math.random() * 26; 
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.value = senha;
    classificarSenha()
}

function classificarSenha(){

    forcaSenha.classList.remove('forte','media','fraca')

    if(tamanhoSenha > 11){
        forcaSenha.classList.add('forte')

    }else if(tamanhoSenha < 7){
        forcaSenha.classList.add('fraca')

    }else{
        forcaSenha.classList.add('media')
    }
}