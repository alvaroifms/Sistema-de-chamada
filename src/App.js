// App.js

import Header from "./components/Header.js";
import Login  from "./pages/Login.js";
import { Presenca } from "./pages/Presenca.js";
import Article from "./components/Article.js";
import LogoIF from "./components/LogoIF.js";
import Cadastro from "./pages/Cadastro.js";
import buttonP from  "./components/buttonP.js";
import EspacoPresenca from "./components/EsapacoPresenca.js";
import Legenda from "./components/Legenda.js";
import FiqueAtento from "./components/FiqueAtento.js";
import Informacoes from "./pages/Informacoes.js";

let state = { name: localStorage.getItem("nomeUsuario") ? localStorage.getItem("nomeUsuario") : "Usuário" };

const setState = (newState) => {
    state = { ...state, ...newState };
    window.renderApp();
};

    const App = () => {
    const app = document.createElement('div');
    
    const main = document.createElement('main');
    const path = window.location.path;

   main.innerHTML = '';
    app.innerHTML = '';

    switch (path) {
        case '/':
        case '/home':
            main.classList.remove(`coluna`)
            app.appendChild(Header(state, setState));
            main.appendChild(Article(state));
            main.append(LogoIF());
            break;

        case '/presenca':
            main.classList.remove(`coluna`)
            app.appendChild(Header(state, setState));
            const div = document.createElement(`div`)
            div.classList.add(`ordem`)
            const dia = 4
            const mes = 10
            div.append(Legenda(),Presenca(dia, mes))
            main.append(FiqueAtento(dia,mes),div);
            main.classList.add(`distancia`)
            break;

        case '/login':
            main.classList.remove(`coluna`)
            main.appendChild(Login(navigate)); 
        break;

        case '/cadastrar':
            main.classList.remove(`coluna`)
            main.appendChild(Cadastro(navigate));
        break;

        case `/fiqueatento`:
            app.appendChild(Header(state, setState));
            main.classList.add(`coluna`)
        for (let i = 0; i < 5; i++) {
           main.appendChild(Informacoes());
        }
        
        break;

    default:
        main.innerHTML = '<h1>404 - Página não encontrada</h1>';
}

    app.appendChild(main);
    
    
    return app;
};

export default App;
