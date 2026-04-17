const Legenda = () =>{
    const div = document.createElement(`div`)
    div.classList.add(`Legenda`)
    div.innerHTML = `
    <h3>Leia atentamente:</h3>
<p>
  Uma bolinha com o <strong>espaço em branco</strong> significa falta e uma 
  <strong>bolinha preta</strong> significa presença. Caso a sua presença 
  não esteja marcada, avise o professor ou o monitor.
</p>
    `
    return div
}

export default Legenda;