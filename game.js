let score = 0;
let power = 1;

let scoreText = document.getElementById("score");
let powerText = document.getElementById("power");

let clickButton = document.getElementById("click");
let upgrade1 = document.getElementById("u1");
let upgrade2 = document.getElementById("u2");
let upgrade3 = document.getElementById("u3");
let upgrade4 = document.getElementById("u4");

clickButton.onclick = function () {
    score = score + power;
    scoreText.innerHTML = score;
};

upgrade1.onclick = function () {
    if (score >= 10) {
        score = score - 10;
        power = power + 1;

        scoreText.innerHTML = score;
        powerText.innerHTML = power;
    }
};

upgrade2.onclick = function () {
    if (score >= 25) {
        score = score - 25;
        power = power + 2;

        scoreText.innerHTML = score;
        powerText.innerHTML = power;
    }
};

upgrade3.onclick = function () {
    if (score >= 50) {
        score = score - 50;
        power = power + 3;

        scoreText.innerHTML = score;
        powerText.innerHTML = power;
    }
};

upgrade4.onclick = function () {
    if (score >= 100) {
        score = score - 100;
        power = power + 5;

        scoreText.innerHTML = score;
        powerText.innerHTML = power;
    }
};