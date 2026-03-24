const header = document.querySelector(`header`)
botaoLogo(header)
const nav = document.createElement(`nav`)
header.appendChild(nav)
const main = document.querySelector(`main`)
const article = document.querySelector(`article`)
const footer = document.querySelector(`footer`)

function botaoLogo(a) {
    const spaceButton = document.createElement(`div`)
    spaceButton.classList.add(`spaceButton`)
    const button = document.createElement(`button`)
    button.classList.add(`botao`)
    const name = document.createElement(`div`)
    name.id = `name`
    const image = document.createElement(`img`)
    image.src = `https://cdn-icons-png.flaticon.com/512/6681/6681204.png`
    button.append(image)
    button.addEventListener(`click`, () => {
        
    })

    spaceButton.append(button, name)
    a.appendChild(spaceButton)
}

        let name2 = prompt(`Nome: `)
        name.innerText = name2
        let permisao = prompt(`Você deseja trocar a URL da imagem de perfil?`)
        if (permisao == `sim` || permisao == `Sim`) {
        let image2 = prompt(`Alterar URL da imagem: `)
        image.src = image2
        }
