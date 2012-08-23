//Guzman, Juan
//SDI 1208
// Project 4 Library


/*

// String 1: Is it a phone number pattern?!

function checkForNumber (phoneNumber){
		var first3 = phoneNumber.indexOf("-");
		if (phoneNumber.indexOf("-") === -1){
				var first3 = phoneNumber.substring(0,3);
				var numberCheck = Number(first3);
					if ( isNaN(numberCheck) ){
						console.log( "This may not be a phone a number. I dont see a numeric area code.")
						} else {
						var first3 = phoneNumber.substring(0, 3);
						var length = phoneNumber.length;
						console.log("This could be a phone number.");
							if (length > 12){
								console.log("But there are too many digits.")
								} else if (length <= 6) {
									console.log("But its too short to be a phone number.")
									}
							}
					
			} else {
			var areaCode = phoneNumber.substring(0,first3);
			var numberCheck = Number(areaCode);
			if ( isNaN(numberCheck) ){
				console.log("This does not look to be a phone number")
				} else { 
					console.log (numberCheck + " looks like an area code. This might be a phone number.")
			};
			return
		};
};

checkForNumber("8005557959")
*/


// String 2: Is it an email?!


function checkForEmail (email){
	var atSymbol = email.indexOf("@");
	var dotCom = email.indexOf(".");
	if (atSymbol === -1, dotCom === -1){
		console.log("I dont think this is an email address.")
		} else {
			console.log("I see the \"@\" symbol. This could be an email address.")
	};
	return

};



checkForEmail("yahoo.com")