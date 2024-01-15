var lastValue = 0;
var randomValue = null;
var flagToFind;
var inputElement;

function showMeTheFlag(){
    var flag = random(myArray);
    var resultat = document.getElementById("flag");
    resultat.innerHTML = flag;
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
        inputElement.value = "";
        showMeTheFlag();
    } else {
        console.log("dommage");
        inputElement.value = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    inputElement = document.getElementById("result");
    showMeTheFlag();
});

