document.getElementById("groceries").onchange = () => {
    for (let i = 0; i < document.getElementsByClassName("articlePrice").length; i++) {
        document.getElementsByClassName("articlePriceTotal")[i].innerHTML = (parseFloat(document.getElementsByClassName("articlePrice")[i].innerHTML) * parseInt(document.getElementsByClassName("articleCount")[i].value)).toFixed(2);
    }
    document.getElementsByClassName("allArticlesPriceTotal")[0].innerHTML = Array.from(document.getElementsByClassName("articlePriceTotal")).map(article => parseFloat(article.innerHTML)).reduce((a,c) => a + c)
}