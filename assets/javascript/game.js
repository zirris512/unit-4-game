var randomNumber = 0;
var wins = 0;
var loss = 0;
var totalScore = 0;
var crystalValue = [];

function ranNum() {
    randomNumber = Math.floor((Math.random()*98)+1);
    $("#random-number").text(randomNumber);
}
function startOver() {
    crystalValue = [];
    ranNum();
    crystalNumber();
    totalScore = 0;
    $("#total-score").text(totalScore);
}

function crystalNumber() {
    for (var i = 0; i < 4; i++) {
        var tempNum = Math.floor((Math.random()*8)+1);
        crystalValue[i] = tempNum;
    }
    $("#emerald").attr("data-crystalvalue", crystalValue[0]);
    $("#ruby").attr("data-crystalvalue", crystalValue[1]);
    $("#sapphire").attr("data-crystalvalue", crystalValue[2]);
    $("#amethyst").attr("data-crystalvalue", crystalValue[3]);
}

crystalNumber();
ranNum();
console.log(crystalValue);

$(".gems").on("click", function() {
    var gemValue = ($(this).attr("data-crystalvalue"));
    gemValue = parseInt(gemValue);
    totalScore += gemValue;
    $("#total-score").text(totalScore);

    if (totalScore === randomNumber) {
        wins++;
        $("#number-wins").text(wins);
        startOver();
    }
    else if (totalScore > randomNumber) {
        loss++;
        $("#number-loss").text(loss);
        startOver();
    }
})