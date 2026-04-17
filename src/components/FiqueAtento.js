const FiqueAtento = (a, b) =>{
    const article = document.createElement('article');
    article.classList.add(`article`)
    for (let i = 0; i < 5; i++) {
        const card = document.createElement(`div`);
        card.classList.add(`cardF`)
        if (i != 0) {
            a++
            card.innerHTML = `<h2>${a}/${b}</h2>
            <p>Informações da fase:</p>`
        }else{
            card.innerHTML = `<h2>${a}/${b}</h2>
            <p>Informações da fase:</p>`
        }
        article.append(card)
    }

    
    return article;
}

export default FiqueAtento;