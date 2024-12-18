class Resumo {
    #texto

    constructor() {
        this.#texto = []
    }

    adicionarResumo(resumo) {
        this.#texto.push(resumo)
    }

    adicionarResumoEmMaterial(material, resumo) {
        if (!material.resumo) { 
            material.resumo = []
        }

        material.resumo.push(resumo)
    }
} //classe Resumo que adiciona resumos para um determinado material

module.exports = Resumo
