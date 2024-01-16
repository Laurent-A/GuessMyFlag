var lastValue = 0;
var randomValue = null;
var flagToFind;
var inputElement;
var score = "0";

function showMeTheFlag(){
    var flag = random(myArray);
	var imageElement = document.getElementById("imageContainer");
    var nouvelleSource = "./data_Flag/"+flag+".jpg";
    imageElement.src = nouvelleSource;
}

function random(myArray) {
    randomValue = Math.floor(Math.random() * myArray.length);
    flagToFind = myArray[randomValue];
    return myArray[randomValue];
}

function getValues(){
    var customerResult = document.getElementById('result').value;
    customerResult;
    var response = checkValueAndReturnKey(customerResult);
    isResponseIsaFlag(response);
}

function getKeyByValue(flagMap, customerResult) {
    for (let [key, value] of flagMap.entries()) {
        if (value === customerResult) {
            return key;
        }
    }
    return null;
}

function checkValueAndReturnKey(customerResult) {
    var key = getKeyByValue(flagMap, customerResult);

    if (key !== null) {
        return key;
    } else {
        console.log(customerResult + " n'est pas un pays");
        return null;
    }
}

function isResponseIsaFlag(valueToCheck) {
    if (flagToFind === valueToCheck) {
        console.log("bravo");
		checkResult = true;
		scoreToCheck(checkResult);
        inputElement.value = "";
        showMeTheFlag();
    } else {
        console.log("dommage");
        inputElement.value = "";
    }
}

function scoreToCheck(checkResult) {
	if (checkResult == true){
		score++;
		console.log(score);
	}
	 var scoreAfficher = document.getElementById("score");
	 scoreAfficher.innerHTML = score;
}

document.addEventListener('DOMContentLoaded', function() {
    inputElement = document.getElementById("result");
    showMeTheFlag();
});

