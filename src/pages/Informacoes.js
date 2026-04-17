const Informacoes = () => {
    const img = document.createElement(`img`)
    const div = document.createElement(`div`)
    const container = document.createElement(`div`)
    container.classList.add(`container`)
    img.classList.add(`TamanhoImagem`)
    div.classList.add(`Legenda2`)
    container.append(img, div)
    return container
}

export default Informacoes;