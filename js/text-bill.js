var billTypeTextElement = document.querySelector('.billTypeText');   
var addToBillBtnElement = document.querySelector('.addToBillBtn');   
var callsTotalElement = document.querySelector('.callTotalOne');  
var smsTotalElement = document.querySelector('.smsTotalOne');    
var totalOneElement = document.querySelector('.totalOne');
var billTypeTextElement = document.querySelector('.billTypeText');

// 

 function textBillTotal(){

    // ... other code here
     var callsTotal = 0;
    var smsTotal = 0;
    var billTypeEntered = billTypeTextElement.value.split(",");
    for(let i=0; i<billTypeEntered.length; i++) {
        var billItem = billTypeEntered[i].trim();

    // update the correct total
    
    if (billItem === "call"){
        callsTotal += 2.75
    }
    else if (billItem === "sms"){
        smsTotal += 0.75;
    }
}
    
    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2);


    
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    }
}
addToBillBtnElement.addEventListener('click', textBillTotal);
