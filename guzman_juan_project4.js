//Guzman, Juan
//SDI 1208
// Project 4 Library




// 1: String 1: Is it a phone number pattern?!

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
			
		};
};

checkForNumber("8005557959")



// 2: String 2: Is it an email?!


function checkForEmail (email){
	var atSymbol = email.indexOf("@");
	var dotCom = email.indexOf(".");
	if (atSymbol === -1){
		console.log("I dont think this is an email address.")
		} else if (dotCom === -1){
			console.log("I see the \"@\" symbol. This could be an email address, but it's incomplete.")
			} else {
			console.log("This looks like an email address.")
	}
	

};


checkForEmail("@yahoo")



// 3: String 3: Is it a URL?


function checkForUrl (url){
	var httpCheck = url.indexOf("http");
	var dotCom = url.indexOf(".");
	if (httpCheck === -1){
		console.log("This URL looks incomplete.")
		} else if (dotCom === -1){
			console.log("This begins to look like a web address")
	} else {
		console.log("This looks like a web address")
	}	

};


checkForUrl("fullsail.edu")



// 4: String 4: Uppercase each work in a string.


function capEachWord (phrase) {
	var splitWords = phrase.split(" ");
	for ( var i = 0; i < splitWords.length; i++ ){
		var firstLet = splitWords[i].charAt(0).toUpperCase();
		splitWords[i] = firstLet + splitWords[i].substr(1);
	}
	return splitWords.join(" ")
	
};

console.log( capEachWord("this is a phrase in caps!") )

//for this code I had to use lynda.com and w3schools.com to figure out that you can split and join phrases.
//the activities did not really dive too much on this type of manipulation.



// 5: Number 1: convert string to actual number.

function convertNum (myNumber) {
	var string = Number(myNumber);
	console.log(string + 3)
};

//convertNum("1983")



// 6: Number 2: Decimal points

function converDec (num){
		var decimal = num.toFixed(3);
		console.log(decimal)
};

//converDec(3.1);


