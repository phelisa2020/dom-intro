var billStringElement = document.querySelector(".billString");
var calculateBtn = document.querySelector('.calculateBtn')
var billTotalElement = document.querySelector(".billTotal")
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billStringField = billStringElement.value.split(",");
    //split the string
    
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billStringField.length;i++){
        var billItem = billStringField[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    styleTotal(roundedBillTotal);
}
calculateBtn.addEventListener('click', calculateBtnClicked);