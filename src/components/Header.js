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
    homeBtn.classList.add("button")
    homeBtn.innerText = "Home";
    homeBtn.onclick = () => navigate('/home');

    const loginBtn = document.createElement('button');
    loginBtn.classList.add("button")
    loginBtn.innerText = "Login";
    loginBtn.onclick = () => navigate('/login');

    const contactBtn = document.createElement('button');
    contactBtn.classList.add("button")
    contactBtn.innerText = "Presença";
    contactBtn.onclick = () => navigate('/presenca');

    const changeBtn = document.createElement('button');
    changeBtn.classList.add("button")
    changeBtn.innerText = "Alterar nome";
    changeBtn.onclick = () => {
        const newName = prompt("Qual seu nome?");
        if (newName) setState({ name: newName });
        localStorage.setItem("nomeUsuario", newName);

    };

    nav.append(homeBtn, loginBtn, contactBtn, changeBtn);

    apresentation.append(Icon(), title);

    header.appendChild(apresentation);
    header.appendChild(nav);

    return header;
};

export default Header;