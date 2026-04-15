const LogoIF = () => {
    const LogoIF = document.createElement("div");
    LogoIF.classList.add("LogoIF");
    const image = document.createElement("img")
    image.classList.add("logoif")
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Instituto_Federal_Marca_2015.svg/960px-Instituto_Federal_Marca_2015.svg.png"
    LogoIF.appendChild(image)

    return LogoIF;
}

export default LogoIF;