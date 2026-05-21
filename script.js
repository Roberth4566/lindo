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

    /* POSICIÓN ALEATORIA */
    heart.style.left =
    Math.random() * 100 + "vw";

    /* DURACIÓN */
    heart.style.animationDuration =
    (Math.random() * 6 + 6) + "s";

    /* TAMAÑO */
    heart.style.fontSize =
    (Math.random() * 18 + 16) + "px";

    /* OPACIDAD */
    heart.style.opacity =
    (Math.random() * 0.5 + 0.2);

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

/* MENOS CORAZONES */
setInterval(createHeart,1800);

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

setInterval(createSparkle,2500);

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

    /* INTENTA REPRODUCIR */
    music.play().catch(()=>{

        console.log("Autoplay bloqueado");

    });

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

        document.querySelector(".music-icon")
        .innerHTML = "🎵";

    }else{

        music.pause();

        document.querySelector(".music-icon")
        .innerHTML = "🔇";

    }

});

/* ======================================== */
/* ✨ EFECTO SUAVE SCROLL */
/* ======================================== */

window.addEventListener("scroll", ()=>{

    const scroll =
    window.scrollY;

    document.querySelector(".glow1")
    .style.transform =
    `translateY(${scroll * 0.08}px)`;

    document.querySelector(".glow2")
    .style.transform =
    `translateY(-${scroll * 0.08}px)`;

});
