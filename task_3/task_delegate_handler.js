const holes = document.querySelector(".hole-game");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let molesKilled = 0;
let blooper = 0;


function handler (event) {
    // Функция обработчик события "click"
    let element = event.target;
    if (element.className.includes("hole_has-mole")) {
        molesKilled++;
    } else {
        blooper++;
    };
    if (molesKilled === 10 || blooper === 5) {
        if (molesKilled === 10) {
            alert("Победа!");
        };
        if (blooper === 5) {
            alert("Вы проиграли!");
        };
        molesKilled = 0;
        blooper = 0;
    };
    dead.textContent = molesKilled;
    lost.textContent = blooper;
};


holes.addEventListener('click', handler);
// holes.onclick = handler; /* тоже работает */
