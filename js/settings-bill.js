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

var callCost = 0.00;
var smsCost=0.00;
var warning = 0.00;
var critical = 0.00;
var totalSettings = 0.00


function updateSettingBtnClicked (){

	  callCost = Number(callCostSettingElement.value) 
      smsCost = Number(smsCostSettingElement.value)
      warning = Number(warningLevelSettingElement.value) 
     critical = Number(criticalLevelSettingElement.value)
//      changeTotalColor(totalSettings, warning, critical);
}
updateSettingElement.addEventListener('click',updateSettingBtnClicked)

function radioBillSetTotal (){
var checkedRadioBtn2 = document.querySelector("input[name='billItemTypeWithSettings']:checked");
var billItemTypeRadio = checkedRadioBtn2.value.trim()
if (billItemTypeRadio === 'call'){
	callTotal += 2.75
}
    else if (billItemTypeRadio === "sms"){
        smsTotal += 0.75;
    }

    
    callTotalSettingsElement.innerHTML= callsTotal2.toFixed(2);
    smsTotalSettingsElement.innerHTML= smsTotal2.toFixed(2);
    var totalCost4 = callTotal +  smsTotal;
    totalSettingsElement.innerHTML = totalCost4.toFixed(2);

}
radioBillAddBtnTwoElement.addEventListener('click', radioBillSetTotal)