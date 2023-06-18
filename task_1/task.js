let startingValue = +document.getElementById("timer").textContent;

const timer = setInterval( () => {
    startingValue -= 1;
    let time = [];
    time[0] = Math.floor(startingValue / 3600);
    time[1] = Math.floor((startingValue % 3600) / 60);
    time[2] = (startingValue % 3600) % 60;
    time.forEach((element, index, array) => {
        if (element < 10) {
            array[index] = "0" + String(element);
        };
    });
    document.getElementById("timer").textContent = `${time[0]}:${time[1]}:${time[2]}`;
    if (startingValue <= 0) {
        clearInterval(timer);
        alert("Вы победили в конкурсе!");
        location.assign("https://netology.ru/");
    };
}, 1000);


