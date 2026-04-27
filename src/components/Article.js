import {Home} from "../pages/Home.js";


const Article = (state) => {
    const article = document.createElement('article');
    article.appendChild(Home(state))
    article.innerHTML += `
    `;

    
    return article;
}

export default Article;