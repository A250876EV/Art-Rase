let score = 0;
let power = 1;

let cost1 = 10;
let cost2 = 25;
let cost3 = 50;
let cost4 = 100;

let scoreText = document.getElementById("score");
let powerText = document.getElementById("power");

let clickButton = document.getElementById("click");
let upgrade1 = document.getElementById("u1");
let upgrade2 = document.getElementById("u2");
let upgrade3 = document.getElementById("u3");
let upgrade4 = document.getElementById("u4");

function updateScreen() {
    scoreText.innerHTML = score;
    powerText.innerHTML = power;

    upgrade1.innerHTML = "Upgrade 1 (" + cost1 + ")";
    upgrade2.innerHTML = "Upgrade 2 (" + cost2 + ")";
    upgrade3.innerHTML = "Upgrade 3 (" + cost3 + ")";
    upgrade4.innerHTML = "Upgrade 4 (" + cost4 + ")";
}

clickButton.onclick = function () {
    score += power;
    updateScreen();
};

upgrade1.onclick = function () {
    if (score >= cost1) {
        score -= cost1;
        power += 1;
        cost1 = Math.floor(cost1 * 1.5); // cena +50%
        updateScreen();
    }
};

upgrade2.onclick = function () {
    if (score >= cost2) {
        score -= cost2;
        power += 2;
        cost2 = Math.floor(cost2 * 1.5);
        updateScreen();
    }
};

upgrade3.onclick = function () {
    if (score >= cost3) {
        score -= cost3;
        power += 3;
        cost3 = Math.floor(cost3 * 1.5);
        updateScreen();
    }
};

upgrade4.onclick = function () {
    if (score >= cost4) {
        score -= cost4;
        power += 5;
        cost4 = Math.floor(cost4 * 1.5);
        updateScreen();
    }
};

updateScreen();
