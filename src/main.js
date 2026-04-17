
import App from './App.js';

const root = document.querySelector('#root');


window.location.path = window.location.hash.replace('#', '') || '/';

const render = (Component) => {
    root.innerHTML = '';
    const node = Component();
    if (node) root.appendChild(node);
};


window.navigate = (path) => {
    window.location.hash = path;
    window.location.path = path;
    render(App);
};


window.onpopstate = () => {
    window.location.path = window.location.hash.replace('#', '') || '/';
    render(App);
};

window.renderApp = () => render(App);
render(App);
