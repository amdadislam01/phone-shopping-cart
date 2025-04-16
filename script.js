function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let newProductCount = productCount;
    if (isIncrease == true) {
       newProductCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
       newProductCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = newProductCount;

    const productTotal = newProductCount * (product == 'phone' ? 1219 : 59);
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal();
    
 }
    
 function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = totalPrice * 0.1;
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

 }

 function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
 }
