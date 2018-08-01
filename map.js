let regioes = []

const pintaEstado = (uf, cor) => {
    document.getElementById(uf).style.fill = cor
}

const pintaRegiao = (regiao) => {
    regiao.listaUFs.forEach((uf) => {
        pintaEstado(uf, regiao.cor)
    })
}

const montaRegiao = (listaUFs, nome, cor) => {
    let regiao = {
        nome: nome,
        cor: cor,
        listaUFs: listaUFs
    };
    regioes.push(regiao)
    pintaRegiao(regiao)        
}