const Article = () => {
    const article = document.createElement('article');

    article.innerHTML = `
        <h2>Card</h2>
        <div class="card"></div>
        <p>Conteúdo de exemplo aqui</p>
        <button class="botao">Ação</button>
    `;

    return article;
}

export default Article;