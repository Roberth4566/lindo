const numero = "593995296138";

/* ======================================== */
/* 💬 BOTONES WHATSAPP */
/* ======================================== */

const btnNo = document.querySelector(".No");
const btnObvio = document.querySelector(".obvio");
const btnMaybe = document.querySelector(".maybe");

if(btnNo){

    btnNo.addEventListener("click", (e)=>{

        createExplosion(e);

        window.open(
        `https://wa.me/${numero}?text=Elegí%20No%20💔`
        );

    });

}

if(btnObvio){

    btnObvio.addEventListener("click", (e)=>{

        createExplosion(e);

        window.open(
        `https://wa.me/${numero}?text=Obvio%20que%20sí%20🥰`
        );

    });

}

if(btnMaybe){

    btnMaybe.addEventListener("click", (e)=>{

        createExplosion(e);

        window.open(
        `https://wa.me/${numero}?text=Tal%20vez...%20👀`
        );

    });

}

/* ======================================== */
/* 💖 CORAZONES FLOTANDO */
/* ======================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("floating");

    heart.innerHTML = "💖";

    /* POSICIÓN MÁS LIMPIA */
    heart.style.left =
    Math.random() * 100 + "vw";

    /* QUE NO SALGAN ARRIBA */
    heart.style.bottom = "-40px";

    /* DURACIÓN MÁS SUAVE */
    heart.style.animationDuration =
    (Math.random() * 6 + 8) + "s";

    /* TAMAÑO */
    heart.style.fontSize =
    (Math.random() * 14 + 14) + "px";

    /* OPACIDAD */
    heart.style.opacity =
    (Math.random() * 0.4 + 0.15);

    /* ROTACIÓN */
    heart.style.transform =
    `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },14000);

}

/* MENOS CORAZONES */
setInterval(createHeart,2200);

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
    (Math.random()*10+10)+"px";

    sparkle.style.opacity =
    (Math.random()*0.5+0.3);

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

setInterval(createSparkle,3000);

/* ======================================== */
/* ✨ EXPLOSIÓN BOTONES */
/* ======================================== */

function createExplosion(event){

    const x = event.clientX;
    const y = event.clientY;

    for(let i=0;i<18;i++){

        const sparkle =
        document.createElement("span");

        sparkle.classList.add("sparkle");

        sparkle.innerHTML = "💖";

        sparkle.style.position = "fixed";

        sparkle.style.left =
        (x + (Math.random() * 120 - 60)) + "px";

        sparkle.style.top =
        (y + (Math.random() * 120 - 60)) + "px";

        sparkle.style.fontSize =
        (Math.random()*20+10)+"px";

        sparkle.style.pointerEvents = "none";

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

    const music =
    document.getElementById("music");

    if(music){

        music.volume = 0.4;

        music.play().then(()=>{

            startMusicAnimation();

        }).catch(()=>{

            console.log("Autoplay bloqueado");

        });

    }

});

/* ======================================== */
/* 📱 SI EL CELULAR BLOQUEA AUTOPLAY */
/* ======================================== */

document.body.addEventListener("click", ()=>{

    const music =
    document.getElementById("music");

    if(music){

        music.play();

        startMusicAnimation();

    }

},{ once:true });

/* ======================================== */
/* 🎵 BOTÓN MÚSICA */
/* ======================================== */

const musicBtn =
document.querySelector(".music-icon");

if(musicBtn){

    musicBtn.addEventListener("click", ()=>{

        const music =
        document.getElementById("music");

        if(!music) return;

        if(music.paused){

            music.play();

            musicBtn.innerHTML = "🎵";

            startMusicAnimation();

        }else{

            music.pause();

            musicBtn.innerHTML = "🔇";

            stopMusicAnimation();

        }

    });

}

/* ======================================== */
/* 🎵 ANIMACIÓN ICONO */
/* ======================================== */

function startMusicAnimation(){

    const musicBtn =
    document.querySelector(".music-icon");

    if(musicBtn){

        musicBtn.style.animation =
        "spin 3s linear infinite";

    }

}

function stopMusicAnimation(){

    const musicBtn =
    document.querySelector(".music-icon");

    if(musicBtn){

        musicBtn.style.animation =
        "none";

    }

}

/* ======================================== */
/* ✨ EFECTO SCROLL SUAVE */
/* ======================================== */

window.addEventListener("scroll", ()=>{

    const scroll =
    window.scrollY;

    const glow1 =
    document.querySelector(".glow1");

    const glow2 =
    document.querySelector(".glow2");

    if(glow1){

        glow1.style.transform =
        `translateY(${scroll * 0.04}px)`;

    }

    if(glow2){

        glow2.style.transform =
        `translateY(-${scroll * 0.04}px)`;

    }

    /* PARALLAX HERO */

    const hero =
    document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
        `${scroll * 0.3}px`;

    }

});

/* ======================================== */
/* ✨ ANIMACIÓN TARJETAS */
/* ======================================== */

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(50px)";

    card.style.transition =
    "all 0.8s ease";

    observer.observe(card);

});

/* ======================================== */
/* ✨ EFECTO AL ENTRAR */
/* ======================================== */

window.addEventListener("load", ()=>{

    setTimeout(()=>{

        document.body.style.opacity = "1";

    },300);

});

/* ======================================== */
/* ✨ CSS EXTRA DESDE JS */
/* ======================================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes spin{

    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }

}

`;

document.head.appendChild(style);
