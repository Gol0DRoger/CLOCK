setInterval(() => {
    date = new Date();
    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();
    
    let hr = H*30+ M/2;//+ S/2;
    let min = M*6;
    let ss = S*6;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${min}deg)`;
    second.style.transform = `rotate(${ss}deg)`;
},1000);
//let timer = document.querySelector("#b1");
//timer.onclick= window.location.href="timer.html";