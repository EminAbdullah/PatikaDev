const myName = document.getElementById("myName");

myName.innerHTML = prompt("Adınız nedir:")

const myClock = document.querySelector("#myClock")

function formatTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0'); 
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function showTime() {
    const currentDate = new Date();
    myClock.innerHTML = formatTime(currentDate);
}

showTime();

setInterval(showTime, 1000);
