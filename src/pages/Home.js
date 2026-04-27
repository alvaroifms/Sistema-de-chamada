
export const Home = (state) => {
    const div = document.createElement('div');
    div.classList.add(`spacecads`)
 div.innerHTML = `
    <h2>Página Inicial</h2><p>Olá, ${state.name}!</p>
    <div class="cardF"></div>
    <div class="cardF"></div>
    <div class="cardF"></div>
    <div class="cardF"></div>
    `;
return div;
};


