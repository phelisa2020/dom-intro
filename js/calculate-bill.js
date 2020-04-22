var billStringElement = document.querySelector(".billString");
var calculateBtn = document.querySelector('.calculateBtn');
var billTotalElement = document.querySelector(".billTotal");
function totalPhoneBill(billString){
    // get the string entered in the textArea
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    return billTotal.toFixed(2)
}
function calculateBtnClicked(){
	  var billString= billStringElement.value
	   var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
     // styleTotal(roundedBillTotal);
}
calculateBtn.addEventListener('click', calculateBtnClicked);

// function totalColor (roundedBillTotal){
// 	billTotalSpan.classList.remove('danger')
// 	billTotalSpan.classList.remove('warning')

// 	const currentTotal = Number(roundedBillTotal);
// 	if(currentTotal >= 30){
// 		billTotalSpan.classList.add('danger');
// 	}
// 	else if(currentTotal >= 20 && currentTotal<30){
// 		billTotalSpan.classList.add('warning');
// 	}
// }
// totalColor.addEventListener('click',calculateBtn)

