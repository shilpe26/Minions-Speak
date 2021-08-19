const inputArea = document.querySelector("#place-text");
const outputArea = document.querySelector("#language");
const translateBtn = document.querySelector("#translate-btn");

var minionsURL = "https://api.funtranslations.com/translate/minion.json";

function translateToMinion(text){
    return minionsURL + "?" + "text=" + text;
};

function errorHandler(error){
    console.log("error occured : ", error);
};

function clickHandler(){
    var textInput = inputArea.value;

    fetch(translateToMinion(textInput))
    .then(response => response.json())
    .then(json => showOutput(json.contents.translated))
    .catch(errorHandler)
};

function showOutput(text){
    outputArea.innerHTML = text;
}

translateBtn.addEventListener("click", clickHandler);