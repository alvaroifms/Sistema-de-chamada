import Button from "./Button.js";
import Icon from "./Icon.js";

const Header = (state, setState) => {
    const header = document.createElement('header');

    const apresentation = document.createElement("div");
    apresentation.classList.add("apresentation");

    const title = document.createElement('h1');
    title.innerText = `Bem-vindo, ${state.name}!`;

    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.innerText = "Home";
    homeBtn.onclick = () => navigate('/home');

    const contactBtn = document.createElement('button');
    contactBtn.innerText = "Contato";
    contactBtn.onclick = () => navigate('/contato');

    const changeBtn = document.createElement('button');
    changeBtn.innerText = "Alterar nome";
    changeBtn.onclick = () => {
        const newName = prompt("Qual seu nome?");
        if (newName) setState({ name: newName });
    };

    nav.appendChild(homeBtn);
    nav.appendChild(contactBtn);
    nav.appendChild(changeBtn);

    apresentation.append(Icon(), title);

    header.appendChild(apresentation);
    header.appendChild(nav);

    return header;
};

export default Header;