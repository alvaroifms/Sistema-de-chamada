const buttonP = () => {
    let presente = 0; // Booleano para controle
    const presenca = document.createElement("button");
    presenca.classList.add("buttonP");

    presenca.addEventListener(`click`, ()=>{
    // Inverte o valor de TRUE para FALSE e vice-versa

        if (presente === 0) {
            presenca.classList.remove("buttonP");
            presenca.classList.add("Falta");
            presente++
        } else {
            presenca.classList.remove("Falta");
            presenca.classList.add("buttonP");
            presente--

        }
    })
    return presenca;
}

export default buttonP;