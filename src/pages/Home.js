// pages/Home.js
export const Home = (state) => {
    const div = document.createElement('div');
    div.innerHTML = `<h2>Página Inicial</h2><p>Olá, ${state.name}!</p>`;
    return div;
};


