function timeverySecond() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(timeverySecond, 1000);
