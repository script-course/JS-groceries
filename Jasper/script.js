const GROCERIES = document.getElementById('groceries');
const ARTICLES = Array.from(document.getElementsByClassName('article'))

GROCERIES.onchange = () => {
    let groceriesTotal = 0
    ARTICLES.forEach(article => {
        let articleTotal = article.getElementsByClassName('articleCount')[0].value * article.getElementsByClassName('articlePrice')[0].innerHTML
        article.getElementsByClassName('articlePriceTotal')[0].innerHTML = makeInteger(articleTotal)
        groceriesTotal += articleTotal;
    });
    document.getElementById('allArticlesPriceTotal').innerHTML =  makeInteger(groceriesTotal)
}

function makeInteger(value){
    return parseFloat(value.toFixed(2))
}