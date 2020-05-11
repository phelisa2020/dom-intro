var checkedRadioBtn2 = document.querySelector("input[name='billItemTypeWithSettings']:checked");

var callCostSettingElement = document.querySelector('.callCostSetting');
var smsCostSettingElement = document.querySelector('.smsCostSetting');
var warningLevelSettingElement = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElement = document.querySelector('.criticalLevelSetting');
var updateSettingElement = document.querySelector('.updateSettings');

var radioBillAddBtnTwoElement = document.querySelector('.radioBillAddBtnTwo');
var callTotalSettingsElement = document.querySelector('.callTotalSettings');
var smsTotalSettingsElement = document.querySelector('.smsTotalSettings');
var totalSettingsElement = document.querySelector('.totalSettings');

var callTotal = 0
var smsTotal = 0

var callCost = 0
var smsCost=0
var warning = 0
var critical = 0

function addBtnClicked (){	
var billItemTypeRadio = checkedRadioBtn2.value.trim();
if (billItemTypeRadio === 'call'){
	callTotal += 2.75
}
	else if (billItemTypeRadio === 'sms'){
		smsTotal +=  0.75

}
}


callTotalSettingsElement.innerHTML= callTotal.toFixed(2);
smsTotalSettingsElement.innerHTML= smsTotal.toFixed(2);
var totalCost4 = callTotal +  smsTotal;
totalSettingsElement.innerHTML = totalCost4.toFixed(2);


radioBillAddBtnTwoElement.addEventListener('click', addBtnClicked);

function updateSettingBtnClicked (){

var billItemTypeRadio = checkedRadioBtn2.value.trim();

if (billItemTypeRadio === 'call'){
	callCost += 2.75
}
	else if (billItemTypeRadio === 'sms'){
		smsCost +=  0.75

}

}

	callCostSettingElement.value= callCost.toFixed(2);
    smsCostSettingElement.value= smsCost.toFixed(2);
     var totalCost = callCost +  smsCost;
     totalSettingsElement.value = totalCost.toFixed(2)
     warningLevelSettingElement.value = totalCost.toFixed(2)
     criticalLevelSettingElement.value = totalCost.toFixed(2)

if (totalCost4 >= warning && totalCost4 < critical){
	totalSettingsElement.className = 'warning'
}

else if (totalCost4 >= critical){
	totalSettingsElement.className = 'black'

}
updateSettingElement.addEventListener('click',updateSettingBtnClicked)