const prompt = require('prompt-sync')();
const Biblioteca = require('./classes/Biblioteca')
const Resumo = require('./classes/Resumo')
const { cadastrarMaterial, menu, menuTipoMaterial, menuBusca, menuTipoBusca } = require('./functions/funcionalidades')

function main(opcao, biblioteca) {
    if (opcao === 1) {
        menuTipoMaterial()

        let tipoMaterial = parseInt(prompt('Qual tipo de material deseja cadastrar? '))
        let material = cadastrarMaterial(tipoMaterial)

        biblioteca.cadastrarMaterial(material)
    } //condição que realiza o cadastro de materiais

    if (opcao === 2) {
        biblioteca.listarMateriais()
        let tituloMaterial = prompt('Digite o título do material desejado: ')
        biblioteca.fazerBusca(tituloMaterial)
        console.log('Resumo adicionado com sucesso!')
        console.log('=====================================')
    } //condição que adiciona resumos

    if (opcao === 3) {
        menuBusca()

        let escolha = parseInt(prompt('Qual das opções deseja realizar? '))

        if (escolha === 1) {
            return biblioteca.listarMateriais()
        }

        if (escolha === 2) {
            menuTipoBusca()

            let tipoBusca = parseInt(prompt('Qual das opções deseja realizar? '))
            let atributo

            if(tipoBusca === 1 || tipoBusca === 2){
                atributo = prompt('Digite o título/autor: ')
    
            }

            if(tipoBusca === 3){
                menuTipoMaterial()

                atributo = parseInt(prompt('Digite o número correspondente: '))
            }

            return biblioteca.buscarMaterial(tipoBusca, atributo)           
        }      
    } //condição que realiza a busca por título, autor ou tipo de material

    if (opcao === 4) {
        console.log('===========ALTERAR STATUS============')
        biblioteca.listarMateriais()
        let tituloMaterial = prompt('Digite o título do material desejado: ')
        biblioteca.alterarStatusLeitura(tituloMaterial)
        console.log('Status atualizado com sucesso!')
        console.log('=====================================')
    } //condição que altera status de material
} //função principal para a execução de ações solicitadas pelo usuário

console.log('=====GESTOR DE LEITURAS E RESUMOS=====')
console.log('Olá! Bem-Vindo(a) ao seu Gestor de Leituras e Resumos!')

let nome = prompt('Como podemos te chamar? ')

console.log(`Bem-Vindo(a), ${nome}! O que gostaria de realizar?`)

let opcao
let biblioteca = new Biblioteca()

do {
    menu()
    opcao = parseInt(prompt('Escolha uma opção: '))
    if (opcao !== 5) {
        main(opcao, biblioteca)
    }
} while (opcao !== 5) //laço de repetição while para que o usuário possa executar outras ações até que decida encerrar o programa

console.log('Saindo...')
