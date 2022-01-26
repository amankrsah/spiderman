spider = document.querySelector(".spider")
obstacle = document.querySelector('.obstacle')
weapon = document.querySelector('.weapon')
score = document.querySelector(".score");
cross = true
score = 0
finalScore = 0
menu = false
shoot = false

document.onkeydown = function(k) {
    console.log("Keycode is : ", k.keyCode);
    if (k.keyCode == 38 || k.keyCode == 32) {
        controls(38)

    } else if (k.keyCode == 13) {
        controls(13)
    } else if (k.keyCode == 82) {
        controls(82)
    }
}

function controls(p) {
    if (p == 38 || p == 32) {
        spider.classList.add("aniSpider")
        setTimeout(() => {
            spider.classList.remove("aniSpider")
        }, 800);

    } else if (p == 13) {
        shoot = true
        weapon.classList.add("aniWeapon")
        setTimeout(() => {
            weapon.classList.remove("aniWeapon")
        }, 500);
    } else if (p == 82 && menu) {
        defaultValues()

    }
}


setInterval(() => {
    let wx = parseInt(window.getComputedStyle(weapon).getPropertyValue("left"));
    let ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    offsetObs = Math.abs(wx - ox);

    if ((offsetObs < 58) && offsetObs > 10 && shoot) {
        document.getElementById("msg").innerHTML = "Collosion"
        setTimeout(() => {
            shoot = false
        }, 5);
    } else
        document.getElementById("msg").innerHTML = "MSG"
}, 100);



setInterval(() => {
    let sx = parseInt(window.getComputedStyle(spider).getPropertyValue("left"));
    let wx = parseInt(window.getComputedStyle(weapon).getPropertyValue("left"));
    let ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    sy = parseInt(window.getComputedStyle(spider).getPropertyValue("top"));
    wy = parseInt(window.getComputedStyle(weapon).getPropertyValue("top"));
    oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));

    offsetX = Math.abs(sx - ox);
    offsetY = Math.abs(sy - oy);

    if ((offsetY < 50) && (offsetX < 90) && (offsetX > 45)) {
        document.getElementById("score").innerHTML = "Game Over";
        finalScore = score
        menu = true
        gameOver(finalScore)
    }
    score++
    updateScore(score)
}, 270);




function defaultValues() {
    document.getElementById("backg").setAttribute("style", "display:none")
    document.getElementById("menu").setAttribute("style", "display:none")
    obstacle.classList.add("aniObstacle")
    score = 0


}

function updateScore(score) {
    document.getElementById("score").innerHTML = "Your Score : " + score;
}

function gameOver(finalScore) {
    document.getElementById("result").innerHTML = "Your Score<br>" + score;
    document.getElementById("backg").setAttribute("style", "display:block")
    document.getElementById("menu").setAttribute("style", "display:block")
    obstacle.classList.remove("aniObstacle")
}