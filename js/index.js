setInterval(() => {
    let dt = new Date();

    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    let hrotation = 30*hr + min/2;
    let mrotation = 6*min;
    let srotation = 6*sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // console.log(dt.getHours());

    let bodyBg = document.getElementById("main");

    if((dt.getHours() > 5) && (dt.getHours() < 12)) {
        bodyBg.style.background = "url('./img/bg-1.jpg') center/cover no-repeat";
        bodyBg.style.opacity = 0.9;
    }
    
    else if((dt.getHours() > 12) && (dt.getHours() < 18)) {
        bodyBg.style.background = "url('./img/bg-2.jpg') center/cover no-repeat";
        bodyBg.style.opacity = 0.9;
    }
    
    else if((dt.getHours() > 18)) {
        bodyBg.style.background = "url('./img/bg-3.jpg') center/cover no-repeat";
        bodyBg.style.opacity = 0.9;
    }

}, 1000);