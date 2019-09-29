var randomNumber = 0;
var wins = 0;
var loss = 0;
var totalScore = 0;
var crystalValue = [];

function ranNum() {
    randomNumber = Math.floor((Math.random()*98)+1);
    $("#random-number").text(randomNumber);
}

function crystalNumber() {
    $("img").attr("data-crysalvalue");
    for (var i = 0; i < 4; i++) {
        var tempNum = Math.floor((Math.random()*8)+1);
        crystalValue[i] = tempNum;
    }
    $("#emerald").attr("data-crystalvalue", crystalValue[0]);
    $("#ruby").attr("data-crystalvalue", crystalValue[1]);
    $("#sapphire").attr("data-crystalvalue", crystalValue[2]);
    $("#amethyst").attr(data-crystalvalue, crystalValue[3]);
}

