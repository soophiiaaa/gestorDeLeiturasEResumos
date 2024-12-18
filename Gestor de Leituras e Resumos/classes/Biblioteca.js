const prompt = require('prompt-sync')();
const Resumo = require('../classes/Resumo')
const { Material, Livro, Revista, Artigo } = require('./Material')

class Biblioteca {
    #biblioteca
    #livros
    #revistas
    #artigos

    constructor() {
        this.#biblioteca = []
        this.#livros = []
        this.#revistas = []
        this.#artigos = []
    } 

    get biblioteca() {
        return this.#biblioteca
    }

    get livros() {
        return this.#livros
    }

    get revistas() {
        return this.#revistas
    }

    get artigos() {
        return this.#artigos
    }

    cadastrarMaterial(material) {
        if (material instanceof Livro) {
            this.#livros.push(material)
        } else if (material instanceof Revista) {
            this.#revistas.push(material)
        } else if (material instanceof Artigo) {
            this.#artigos.push(material)
        }

        this.#biblioteca.push(material)
        console.log("Material cadastrado com sucesso!")
    } //método para realizar o cadastro de materiais

    listarMateriais() {
        console.log('=====================================')
        for (let i = 0; i < this.#biblioteca.length; i++) {
            console.log(`MATERIAL ${i + 1}\n- Título: ${this.#biblioteca[i].titulo}\n- Autor: ${this.#biblioteca[i].autor}`)

            if (this.#biblioteca[i].resumo) {
                console.log(`MATERIAL ${i + 1}\n- Título: ${this.#biblioteca[i].titulo}\n- Autor: ${this.#biblioteca[i].autor}\n- Resumo: ${this.#biblioteca[i].resumo}`)
            }

            if (this.#biblioteca[i].status) {
                console.log(`MATERIAL ${i + 1}\n- Título: ${this.#biblioteca[i].titulo}\n- Autor: ${this.#biblioteca[i].autor}\n- Resumo: ${this.#biblioteca[i].resumo}\n- Status: ${this.#biblioteca[i].status}`)
            }
        }
        console.log('=====================================')
    } //método para realizar a listagem de materiais

    buscarMaterial(tipoBusca, atributo) {
        if (this.#biblioteca.length === 0) {
            console.log('A biblioteca está vazia.')
            return
        }

        let encontrou = false

        for (let k = 0; k < this.#biblioteca.length; k++) {
            const material = this.#biblioteca[k]

            if (
                (tipoBusca === 1 && material.titulo === atributo) ||
                (tipoBusca === 2 && material.autor === atributo)
            ) {
                console.log(`MATERIAL ${k + 1}\n- Título: ${material.titulo}\n- Autor: ${material.autor}`)
                encontrou = true;
            }
        }

        if(tipoBusca === 3){
            if(atributo === 1){
                console.log('=====================================')
                for (let i = 0; i < this.#livros.length; i++) {
                    console.log(`MATERIAL ${i + 1}\n- Título: ${this.#livros[i].titulo}\n- Autor: ${this.#livros[i].autor}`)
                    encontrou = true;
                }
                console.log('=====================================')
            }

            if(atributo === 2){
                console.log('=====================================')
                for (let i = 0; i < this.#revistas.length; i++) {
                    console.log(`MATERIAL ${i + 1}\n- Título: ${this.#revistas[i].titulo}\n- Autor: ${this.#revistas[i].autor}`)
                    encontrou = true;
                }
                console.log('=====================================')
            }

            if(atributo === 3){
                console.log('=====================================')
                for (let i = 0; i < this.#artigos.length; i++) {
                    console.log(`MATERIAL ${i + 1}\n- Título: ${this.#artigos[i].titulo}\n- Autor: ${this.#artigos[i].autor}`)
                    encontrou = true;
                }
                console.log('=====================================')
            }
        }

        if (!encontrou) {
            console.log('Nenhum material encontrado com o atributo fornecido.')
        }
    } // método para realizar a busca de materiais

    fazerBusca(tituloMaterial) {
        let resumo = new Resumo()
        for (let i = 0; i < this.#biblioteca.length; i++) {
            if (this.#biblioteca[i].titulo === tituloMaterial) {
                let material = this.#biblioteca[i]
                let texto = prompt('Adicione seu Resumo: ')
                resumo.adicionarResumoEmMaterial(material, texto)
            }
        }
        return `Material não encontrado!`
    } //método que adiciona resumos para determinado material

    alterarStatusLeitura(tituloMaterial) {
        for (let i = 0; i < this.#biblioteca.length; i++) {
            if (this.#biblioteca[i].titulo === tituloMaterial) {
                let status = prompt('Atualize o status da sua leitura: ')
                this.#biblioteca[i].status = status
            }
        }
        return `Material não encontrado!`
    } //método que altera o status do material
} //classe Biblioteca que armazena todos os materiais cadastrados pelo usuário

module.exports = Biblioteca
