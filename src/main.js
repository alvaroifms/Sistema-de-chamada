const root = document.querySelector("#root");

import App from "App.js"; // Corrigido o caminho para o arquivo App.js

// Função para renderizar o componente
const render = (Component) => {
    const component = Component();
    root.innerHTML = '';  // Limpa o conteúdo anterior
    root.appendChild(component);
};

// Renderiza o componente App
render(App);