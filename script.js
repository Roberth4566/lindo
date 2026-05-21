const numero = "593995296138";

/* ======================================== */
/* 💬 BOTONES WHATSAPP */
/* ======================================== */

document.querySelector(".No").addEventListener("click", ()=>{

    createExplosion();

    window.open(
    `https://wa.me/${numero}?text=Elegí%20No%20💔`
    );

});

document.querySelector(".obvio").addEventListener("click", ()=>{

    createExplosion();

    window.open(
    `https://wa.me/${numero}?text=Obvio%20que%20sí%20🥰`
    );

});

document.querySelector(".maybe").addEventListener("click", ()=>{

    createExplosion();

    window.open(
    `https://wa.me/${numero}?text=Tal%20vez...%20👀`
    );

});

/* ======================================== */
/* 💖 CORAZONES FLOTANDO */
/* ======================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("floating");

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

    heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,900);

/* ======================================== */
/* ✨ ESTRELLITAS */
/* ======================================== */

function createSparkle(){

    const sparkle =
    document.createElement("span");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML = "✨";

    sparkle.style.left =
    Math.random()*100 + "vw";

    sparkle.style.top =
    Math.random()*100 + "vh";

    sparkle.style.fontSize =
    (Math.random()*15+10)+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2000);

}

setInterval(createSparkle,1200);

/* ======================================== */
/* ✨ EXPLOSIÓN BOTONES */
/* ======================================== */

function createExplosion(){

    for(let i=0;i<18;i++){

        const sparkle =
        document.createElement("span");

        sparkle.classList.add("sparkle");

        sparkle.innerHTML = "💖";

        sparkle.style.left =
        Math.random()*100 + "vw";

        sparkle.style.top =
        Math.random()*100 + "vh";

        sparkle.style.fontSize =
        (Math.random()*20+10)+"px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },2000);

    }

}

/* ======================================== */
/* 🎵 MÚSICA AUTOMÁTICA */
/* ======================================== */

window.addEventListener("load", ()=>{

    createExplosion();

    const music =
    document.getElementById("music");

    music.volume = 0.4;

    music.play();

});

/* ======================================== */
/* 📱 SI EL CELULAR BLOQUEA AUTOPLAY */
/* ======================================== */

document.body.addEventListener("click", ()=>{

    const music =
    document.getElementById("music");

    music.play();

},{ once:true });

/* ======================================== */
/* 🎵 BOTÓN MÚSICA */
/* ======================================== */

document.querySelector(".music-icon")
.addEventListener("click", ()=>{

    const music =
    document.getElementById("music");

    if(music.paused){

        music.play();

    }else{

        music.pause();

    }

});
