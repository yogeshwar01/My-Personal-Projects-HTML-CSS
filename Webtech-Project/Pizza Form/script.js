const priceSmall = 4.00;
const priceMedium = 5.00;
const priceLarge = 7.00;
const priceToppings = 0.50; 
const pst = .07;
const gst = .07
let subtotal = 0;

function calculateSize(element) {
    if (element == null) {
      return;
    }
  
    switch(element.value) {
      case "10":
        subtotal = priceSmall;
        break;
      case "12":
        subtotal = priceMedium;
        break;
      case "15":
        subtotal = priceLarge;
        break;
    }
      recalculateTotal();
  }
  
  function toppingOptionPrice(element) {
    if (element.checked) {
        subtotal += priceToppings;
    } else {
        subtotal -= priceToppings;
    }
      recalculateTotal();
  }
  
  function recalculateTotal() {
    let pstToPay = subtotal * pst;
    let gstToPay = subtotal * gst;
    let total = subtotal + pstToPay + gstToPay;
    document.getElementById("subtotal").value = subtotal;
    document.getElementById("pstToPay").value = pstToPay;
    document.getElementById("gstToPay").value = gstToPay;
    document.getElementById("total").value = total;
  }
  