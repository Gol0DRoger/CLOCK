window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
}

function calculate () {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const stop = document.querySelector('#stop');
    
    const endTime = new Date(date + " " + time);

    const interval = setInterval(() => calculateTime(endTime), 500);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        console.log(timeLeft);
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    }
     else {
        alert("You are living in the Past, Change the Date & Time:");
        window.location.reload();
    }
}

function reset() {
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
}