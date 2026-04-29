
export const Home = (state) => {
    const div = document.createElement('div');
    div.classList.add(`spacecads`)
 div.innerHTML = `
    <h2>Página Inicial</h2>Olá, ${state.name}!
    <div class="cardF"><h3>Contato:</h3></div>
    <div class="cardF"><h3>Professores e Monitores:</h3></div>
    <div class="cardF"><h3>Notificações:</h3></div>
    <div class="cardF"><h3>Sugestões:</h3></div>
    `;
  
  div.addEventListener('click', (event) => {
    // Verifica se o que foi clicado é um cardF ou está dentro de um
    const card = event.target.closest('.cardF');
    
    if (card) {
      console.log("Clicou no card!"); // Para você testar no console
      navigate('/fiqueatento');
    }
  });

return div;
};


