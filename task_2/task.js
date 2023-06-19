const start = performance.now();
const clickerCounter = document.getElementById("clicker__counter");
const element = document.getElementById("cookie");

// Создается новый тэг <p></p> с текстом "Скорость клика: " и 
// включающим в себя тэг <span id="click__speed">0</span>
// по другому красивый вывод не придумал как сделать
newP = '<p>Скорость клика: <span id="click__speed">0</span></p>';
clicker__counter.insertAdjacentHTML('afterend', newP);
const speedElement = document.getElementById("click__speed");

let counter = +clickerCounter.textContent;
let check = true;
element.onclick = () => {
    counter += 1;
    let clickSpeed = (counter / (performance.now() - start) * 1000).toFixed(2);
    clickerCounter.textContent = counter;
    speedElement.textContent = clickSpeed;
    if (check) {
        element.width += 50;
        element.hight += 50;    
    } else {
        element.width -= 50;
        element.hight -= 50;
    };
    check = !check;
};