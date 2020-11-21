/*
//Aula 1
const nome = 'Giovani'
const idade = 25
const frase = `${nome} tem ${idade} anos.`
alert(frase.replace('Giovani', 'João'))
alert(frase.toUpperCase())
alert(frase.toLowerCase())

//Aula 2 
const frutas = ['Banana', 'Laranja', 'Maçã']
frutas.push('Uva')
frutas.pop() //Remove último elemento
console.log(frutas[1])
console.log(frutas)
console.log(frutas.length)
console.log(frutas.reverse())
console.log(frutas.toString())
console.log(frutas.join("-"))

const fruta = {
    nome: "Banana",
    cor: "Amarelo"
}

console.log(fruta)
alert(fruta.nome)
alert(fruta.cor)

const pessoas = [{nome: "Giovani", idade: 25}, {nome: "Priscila", idade: 22}]

console.log(pessoas)
console.log(pessoas[1].nome)

//Aula 03

let idade = prompt('Qual é a sua idade?')

if(idade >= 18){
    alert('Maior de idade')
}
else{
    alert('Menor de idade')
}

let contador = 1
while (contador <= 5){
    console.log(contador)
    contador++
}

for(let i = 0; i < 5; i++){
    console.log(i)
}

const data = new Date()
alert(data.getHours())

//Aula 04

function soma (num1 , num2){
    return num1 + num2
}

alert(soma(2, 5))

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome)
}

alert(setReplace("Meu nome é Giovani", "Giovani", "João"))

function validarIdade(idade){
    const resultado = idade >= 18 ? true : false
    return resultado
}


alert(validarIdade(prompt("Insira sua idade")))

*/

function clicou (){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
}

function redirecionar(){
    window.open("https://google.com", "_blank")
    //window.location.href = "https://google.com"
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Trocou"
   elemento.innerHTML = "Trocou"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function change(elemento){
    alert(elemento.value)
}