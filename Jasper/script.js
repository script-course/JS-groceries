const GROCERIES = document.getElementById('groceries');
const ARTICLES = Array.from(document.getElementsByClassName('article'))

GROCERIES.onchange = () => {
    let groceriesTotal = 0
    ARTICLES.forEach(article => {
        let count = article.getElementsByClassName('articleCount')[0].value
        let price = article.getElementsByClassName('articlePrice')[0].innerHTML
        let total = count * price

        article.getElementsByClassName('articlePriceTotal')[0].innerHTML = makeInteger(total)
        groceriesTotal += total;
    });
    document.getElementById('allArticlesPriceTotal').innerHTML =  makeInteger(groceriesTotal)
}

function makeInteger(value){
    return parseFloat(value.toFixed(2))
}