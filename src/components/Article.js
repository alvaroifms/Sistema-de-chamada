import {Home} from "../pages/Home.js";


const Article = (state) => {
    const article = document.createElement('article');
    article.appendChild(Home(state))
    article.innerHTML += `

        <button class="botao">Ação</button>
    `;

    
    return article;
}

export default Article;