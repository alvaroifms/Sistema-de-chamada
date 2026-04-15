// App.js

import Header from "./components/Header.js";
import Login  from "./pages/Login.js";
import { FiqueAtento } from "./pages/Presenca.js";
import Article from "./components/Article.js";
import LogoIF from "./components/LogoIF.js";
import Cadastro from "./pages/Cadastro.js";
import buttonP from  "./components/buttonP.js";

let state = { name: localStorage.getItem("nomeUsuario") ? localStorage.getItem("nomeUsuario") : "Usuário" };

const setState = (newState) => {
    state = { ...state, ...newState };
    window.renderApp();
};

    const App = () => {
    const app = document.createElement('div');
    
    // Header fixo em todas as páginas
    

    // Lógica de Roteamento (Switch/Case)
    const main = document.createElement('main');
    const path = window.location.path;

   main.innerHTML = '';
    app.innerHTML = '';

    switch (path) {
        case '/':
        case '/home':
            app.appendChild(Header(state, setState));
            main.appendChild(Article(state));
            main.append(LogoIF());
            break;

        case '/presenca':
            app.appendChild(Header(state, setState));
            main.appendChild(FiqueAtento(buttonP()));
            break;

        case '/login':
            main.appendChild(Login(navigate)); 
        break;

        case '/cadastrar':
            main.appendChild(Cadastro(navigate));
        break;

    default:
        main.innerHTML = '<h1>404 - Página não encontrada</h1>';
}

    app.appendChild(main);
    
    
    return app;
};

export default App;
