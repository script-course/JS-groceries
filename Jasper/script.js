const GROCERIES = document.getElementById('groceries');
const ARTICLES = Array.from(document.getElementsByClassName('article'))

GROCERIES.onchange = () => {
    const total = ARTICLES.reduce((groceriesTotal, article) => {
        const count = article.getElementsByClassName('articleCount')[0].value
        const price = article.getElementsByClassName('articlePrice')[0].innerHTML
        const total = count * price

        article.getElementsByClassName('articlePriceTotal')[0].innerHTML = makeInteger(total)
        return groceriesTotal + total;
    }, 0)
    
    document.getElementById('allArticlesPriceTotal').innerHTML =  makeInteger(total)
}

function makeInteger(value){
    return parseFloat(value.toFixed(2))
}
