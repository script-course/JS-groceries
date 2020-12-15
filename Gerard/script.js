// Part 1

// // Step 1
// /** @type {HTMLTableElement} */
// const productTableElement = document.getElementById('product-table');

// // Step 2
// const productCount = () => {
//     console.log('aantal producten is gewijzigd');
// };

// // Step 3
// productTableElement.addEventListener('change', productCount);

// Part 2

/** @type {HTMLTableCellElement[]} */
const productPriceElements = document.getElementsByClassName('product-price');
/** @type {HTMLInputElement[]} */
const productQuantityElements = document.getElementsByClassName('product-quantity');
/** @type {HTMLTableCellElement[]} */
const productCostElements = document.getElementsByClassName('product-cost');
/** @type {HTMLTableCellElement} */
const totalCostElement = document.getElementById('total-cost');

document.getElementById('product-table').addEventListener('change', () => {
    let totalCost = 0;

    for (let productNr = 0; productNr < productPriceElements.length; productNr++) {
        const price = parseFloat(productPriceElements[productNr].innerHTML);
        const cost = price * parseInt(productQuantityElements[productNr].value);

        totalCost += cost;

        productCostElements[productNr].innerHTML = cost.toFixed(2);
    }

    totalCostElement.innerHTML = totalCost.toFixed(2);
});
