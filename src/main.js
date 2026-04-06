// main.js
import App from './App.js';

const root = document.querySelector('#root');

// Estado da Rota
window.location.path = window.location.hash.replace('#', '') || '/';

const render = (Component) => {
    root.innerHTML = '';
    const node = Component();
    if (node) root.appendChild(node);
};

// Função global para navegar sem recarregar a página
window.navigate = (path) => {
    window.location.hash = path; // Usa o hash (#) para não precisar de servidor configurado
    window.location.path = path;
    render(App);
};

// Escuta o botão "voltar/avançar" do navegador
window.onpopstate = () => {
    window.location.path = window.location.hash.replace('#', '') || '/';
    render(App);
};

window.renderApp = () => render(App);
render(App);
