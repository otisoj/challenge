var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var sectionText1 = document.querySelector(".text1");
var sectionText2 = document.querySelector(".text2");
var btnCopy = document.querySelector(".copy");

function validate(textToValidate) {
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var count = 0;

    for (var position = 0; position < textToValidate.length; position++) {
        for (var letter = 0; letter < letters.length; letter++) {
            if (textToValidate.charAt(position) == letters[letter]) {
                count++;
            }
        }
    }
    if (count == 0) {
        return true;
    }
    return false;
}

function encrypt() {
    var text = inputText.value;
    var output = "";
    if (!validate(text)) {
        alert("Texto invalido, verifique su texto.");
        return;
    }
    for (var position = 0; position < text.length; position++) {
        if (text.charAt(position) == "a") {
            output += "ai";
        } else if (text.charAt(position) == "e") {
            output += "enter";
        } else if (text.charAt(position) == "i") {
            output += "imes";
        } else if (text.charAt(position) == "o") {
            output += "ober";
        } else if (text.charAt(position) == "u") {
            output += "ufat";
        } else {
            output += text.charAt(position);
        }
    }
    inputText.value = "";
    outputText.value = output;
    hide();
}

function decrypt() {
    var text = inputText.value;
    var output = "";
    if (!validate(text)) {
        alert("Texto invalido, verifique su texto.");
        return;
    }
    for (var position = 0; position < text.length; position++) {
        if (text.charAt(position) == "a" && text.charAt(position + 1) == "i") {
            output += "a";
            position++;
        } else if (text.charAt(position) == "e" && text.slice(position, position + 5) == "enter") {
            output += "e";
            position += 4;
        } else if (text.charAt(position) == "i" && text.slice(position, position + 4) == "imes") {
            output += "i";
            position += 3;
        } else if (text.charAt(position) == "o" && text.slice(position, position + 4) == "ober") {
            output += "o";
            position += 3;
        } else if (text.charAt(position) == "u" && text.slice(position, position + 4) == "ufat") {
            output += "u";
            position += 3;
        } else {
            output += text.charAt(position);
        }
    }
    inputText.value = "";
    outputText.value = output;
    hide();
}

function hide() {
    outputText.style.background = "white";
    sectionText1.style.display = "none";
    sectionText2.style.display = "none";
    btnCopy.style.display = "";
}

function show() {
    outputText.style.background = "#FFF no-repeat center url(./images/text.png)";
    sectionText1.style.display = "";
    sectionText2.style.display = "";
    btnCopy.style.display = "none";
}

function copy() {
    var copyText = outputText.value;
    navigator.clipboard.writeText(copyText);

    setTimeout(() => {
        outputText.value = "";
        show();
    }, 950);
}

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});
