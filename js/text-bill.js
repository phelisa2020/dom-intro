// // get a reference to the textbox where the bill type is to be entered

//  //get a reference to the add button
//  var addToBtnElement = document.querySelector('.addToBillBtn');
//  var billTypeTextElement =  document.querySelector('.billTypeText');
 
//  function textBillTotal (){
//  	var billTypeTextElement = document.querySelector('.billTypeText');
 
//  }
//  //create a variable that will keep track of the total bill
//  var totalOneElement = document.querySelector('.tatalOne');

//  var callsTotalElement = document.querySelector('.callTotalOne');
//  var smsTotalElement = document.querySelector('.smsTotalOne');
//  var callsTotal = 0;
//  var smsTotaL = 0;

//  //add an event listener for when the add button is pressed
//  var billTypeEntered = billTypeTextElement.value.split(' , ');
//  for (let i=0; i < billTypeEntered.length; i++ ) {
//  	var billItem = billTypeEntered[i].trim();

//  	if(billItem === 'call'){
//  	 callsTotal += 2.75
//  	}
//  	else if (billItem === 'sms'){
//  		smsTotaL += 0.75
//  	}
// }

//  callsTotalElement.innerHTML = callsTotal.toFixed(2);
//  smsTotalElement.innerHTML= smsTotaL.toFixed(2);
//  var totalCost = callsTotal + smsTotaL;
//  totalOneElement.innerHTML = totalCost.toFixed(2);

// // //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// // // * add the appropriate value to the running total
// // // * add nothing for invalid values that is not 'call' or 'sms'.
// // // * display the latest total on the screen
