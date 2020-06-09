var calculateBill = function(){
	var calls = 0;
	var totalAdd = 0;

	function addCall(calls){
		totalAdd += Number(calls)

	}
	function forEachSms(sms){
		totalAdd += sms
	}
	function getCallCost (){
		return calls;
	}
	function totalSmsTotal(){
		return sms;
	}
	function warningLevel(){
		return 'warning'
	}
	function criticalLevel(){
		return'critical'
	}
	return{
		addCall
		getCallCost
		setCallCost
		forEachSms,
		totalCallsTotal,
		
	}
}
