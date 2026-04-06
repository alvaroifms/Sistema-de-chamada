// App.js

import Header from "./components/Header.js";
import { Home } from "./pages/Home.js";
import { Contact } from "./pages/Contact.js";
import Article from "./components/Article.js";
import LogoIF from "./components/LogoIF.js";

let state = { name: "John Doe" };

const setState = (newState) => {
    state = { ...state, ...newState };
    window.renderApp();
};

const App = () => {
    const app = document.createElement('div');
    
    // Header fixo em todas as páginas
    app.appendChild(Header(state, setState));

    // Lógica de Roteamento (Switch/Case)
    const main = document.createElement('main');
    const path = window.location.path;

    if (path === '/' || path === '/home') {
        main.appendChild(Home(state));
    } else if (path === '/contato') {
        main.appendChild(Contact());
    } else {
        main.innerHTML = '<h1>404 - Página não encontrada</h1>';
    }

    app.appendChild(main);
    main.append(LogoIF(), Article())
    return app;
};

export default App;
