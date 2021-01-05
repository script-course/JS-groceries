const groceryTable = document.getElementById('groceryTable');
const grandTotal = document.getElementById('grandTotal');
const productPrices = document.getElementsByClassName('productPrice');
const productQuantities = document.getElementsByClassName('productQuantity');
const productSubTotals = document.getElementsByClassName('productSubTotal');

groceryTable.onchange = () => {
    let total = 0;

    for(let i=0; i<productPrices.length; i++) {
        let subtotal = productQuantities[i].value * productPrices[i].innerHTML;
        productSubTotals[i].innerHTML = subtotal.toFixed(2);
        total += subtotal;
    }

    grandTotal.innerHTML = total.toFixed(2);
}