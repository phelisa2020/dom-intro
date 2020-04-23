var billStringElement = document.querySelector(".billString");
var calculateBtn = document.querySelector('.calculateBtn');
var billTotalElement = document.querySelector(".billTotal");
var billTotalSpansElement = document.querySelector('.total:checked')
 
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
    // billTotalSpan.classList.remove('warning')
    // billTotalSpan.classList.remove('danger')
	
 // const currentColors = document.querySelector('.total:checked ')
   
 //     billTotalSpan.classList.add(currentColor.value)
 //    const currentColor = Number(roundedBillTotal);

	// if(currentColor>= 30){
	// 	billTotalSpan.classList.add('danger');
	// }
	// else if(currentColor >= 20 && currentTotal<30){
	// 	billTotalSpan.classList.add('warning');
	// }
}


     // styleTotal(roundedBillTotal);

calculateBtn.addEventListener('click', calculateBtnClicked);

function totalColor(roundedBillTotal){
		
	var billTotalSpansElement = document.querySelector('.total')
const currentTotal = Number(roundedBillTotal);

	 	billTotalSpansElement.classList.remove('warning')
billTotalSpansElement.classList.remove('danger')
// const billTotalSpan = document.querySelector('.billTotal')
 
 	if(currentTotal >= 30){
 		billTotalSpansElement.classList.add('danger');
 	}
 	else if(currentTotal >= 20 && currentTotal<30){
 		billTotalSpansElement.classList.add('warning');
 	}
 }
 
calculateBtn.addEventListener('click', totalColor);

