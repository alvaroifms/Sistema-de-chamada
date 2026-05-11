
export const Home = (state) => {
  const div = document.createElement('div');
  div.classList.add('spacecads');

  div.innerHTML = `
    <h2>Página Inicial</h2>
    Olá, ${state.name}!
    <div class="cardF"><h3>Contato:</h3></div>
    <div class="cardF"><h3>Professores e Monitores:</h3></div>
    <div class="cardF"><h3>Notificações:</h3></div>
    <div class="cardF2">
      <h3>Sugestões:</h3>
      <p class="sugestao"></p>
    </div>
  `;

setTimeout(() => {
  const el = document.querySelector('.cardF2');

  console.log("elemento na tela:", el);

  el.onclick = () => {
    const texto = prompt("Digite a sua sugestão:")
    const p = document.querySelector(`.sugestao`)
    p.innerText = texto
  };
}, 1000);

  return div;
};


