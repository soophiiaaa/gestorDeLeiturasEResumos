const prompt = require('prompt-sync')();

class Material {
    #titulo
    #autor
    #dataInicio
    #dataFim

    constructor() {} 

    get titulo() {
        return this.#titulo;
    }
    
    get autor() {
        return this.#autor;
    }
    
    get dataInicio() {
        return this.#dataInicio;
    }
    
    get dataFim() {
        return this.#dataFim;
    }

    registrarDados() {
        this.#titulo = prompt('Título: ')
        this.#autor = prompt('Autor: ')
        this.#dataInicio = prompt('Data de Início (DD/MM/YYYY): ')
        this.#dataFim = prompt('Data de Término (DD/MM/YYYY): ')
    }
} //classe mãe para o cadastramento de materiais

class Livro extends Material {
    #genero
    #nPaginas

    constructor() {
        super()
    }

    registrarDados() {
        super.registrarDados()
        this.#genero = prompt('Gênero: ')
        this.#nPaginas = prompt('Número de Páginas: ')
    }

    filtrarMaterial() {

    }
} //subclasse Livro

class Revista extends Material {
    #edicao
    #tema

    constructor() {
        super()
    }

    registrarDados() {
        super.registrarDados()
        this.#edicao = prompt('Edição: ')
        this.#tema = prompt('Tema Principal: ')
    }
} //subclasse Revista

class Artigo extends Material {
    #assunto

    constructor() {
        super()   
    }

    registrarDados() {
        super.registrarDados()
        this.#assunto = prompt('Assunto: ')
    }
} //subclasse Artigo

module.exports = { Material, Livro, Revista, Artigo }
