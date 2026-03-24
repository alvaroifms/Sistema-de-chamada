// Criando um estado simples (similar ao useState do React)
let state = {
    name: 'John Doe',
};

const setState = (newState) => {
    state = { ...state, ...newState };
    render(App);  // Re-renderiza o app sempre que o estado mudar
};

// Componente Header com estado
const Header = () => {
    const header = document.createElement('header');
    
    // Usando o estado para exibir o nome
    header.innerHTML = `<h1>Bem-vindo, ${state.name}!</h1>`;

    const button = document.createElement('button');
    button.innerText = "Alterar nome";
    button.addEventListener('click', () => {
        const newName = prompt('Qual seu nome?');
        setState({ name: newName });
    });

    header.appendChild(button);

    return header;
};

// Componente App
const App = () => {
    const app = document.createElement("div");

    // Usando o Header dentro do App
    const header = Header();

    const content = `
    <main>
        <article>Conteúdo principal</article>
    </main>
    <footer>
        <p>Rodapé</p>
    </footer>
    `;

    app.innerHTML = content;

    // Adicionando o Header antes do main e footer
    app.prepend(header);

    return app;
};

export default App;