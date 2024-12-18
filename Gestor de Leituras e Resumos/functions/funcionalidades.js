const prompt = require('prompt-sync')();
const Resumo = require('../classes/Resumo')
const { Material, Livro, Revista, Artigo } = require('../classes/Material')

function cadastrarMaterial(tipoMaterial) {
    let material

    if (tipoMaterial === 1) {
        material = new Livro()
    }

    if (tipoMaterial === 2) {
        material = new Revista()
    }

    if (tipoMaterial === 3) {
        material = new Artigo()
    }

    material.registrarDados()
    return material
} //função que verifica o tipo de material para fazer o cadastro

function menu() {
    console.log('================MENU=================')
    console.log('1. Cadastrar Material\n2. Resumos de Leitura\n3. Listar e Buscar Materiais\n4. Gerenciar Status de Leitura\n5. Sair')
    console.log('=====================================')
} //função para a exibição do menu

function menuTipoMaterial() {
    console.log('==============MATERIAL===============')
    console.log('1. Livro\n2. Revista\n3. Artigo')
    console.log('=====================================')
} //função para a exibição do menu que mostra os tipos de materiais

function menuBusca() {
    console.log('===============OPÇÕES================')
    console.log('1. Listar\n2. Buscar')
    console.log('=====================================')
} //função para a exibição do menu de listagem e busca de materiais

function menuTipoBusca() {
    console.log('=============BUSCAR POR==============')
    console.log('1. Título\n2. Autor \n3. Tipo')
    console.log('=====================================')
} //função para exibição do menu para escolher o tipo de busca

function testes() {
    console.assert(biblioteca.cadastrarMaterial(material) === "Material cadastrado com sucesso!", 'ERRO: cadastrarMaterial(material)')
}

module.exports = { cadastrarMaterial, menu, menuTipoMaterial, menuBusca, menuTipoBusca }
