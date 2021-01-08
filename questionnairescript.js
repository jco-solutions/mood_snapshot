$('#calculate-button').click(function setScore() {
    var score = 0;
    $.each($('input:checked'), function (i, input) { score += Number(input.value); });
    $('#score').text(score);
    // console.log(score);
    document.getElementById("display-score").innerHTML = "Score = " + score;
    var scoreInterpretation = "";
    if (score <= 4) {
        scoreInterpretation = document.getElementById("score-interpretation").innerHTML = "Minimal Depression";
    } else if (score > 4 && score <= 9) {
        scoreInterpretation = document.getElementById("score-interpretation").innerHTML = "Mild Depression";
    } else if (score > 9 && score <= 14) {
        scoreInterpretation = document.getElementById("score-interpretation").innerHTML = "Moderate Depression";
    } else if (score > 14 && score <= 19) {
        scoreInterpretation = document.getElementById("score-interpretation").innerHTML = "Moderately Severe Depression";
    } else if (score >= 20) {
        scoreInterpretation = document.getElementById("score-interpretation").innerHTML = "SEVERE DEPRESSION";
    }

    var scoreInt = document.getElementById("score-interpretation");
    if (score <= 4) {
        scoreInt.style.color = "green";
    } else if (score > 4 && score <= 9) {
        scoreInt.style.color = "yellow";
    } else if (score > 9 && score <= 14) {
        scoreInt.style.color = "orange";
    } else if (score > 14 && score <= 19) {
        scoreInt.style.color = "red";
    } else if (score >= 20) {
        scoreInt.style.color = "red";
        scoreInt.style.textDecoration = "underline";
    }

})







