/* ======================================== */
/* 📱 NÚMERO WHATSAPP */
/* ======================================== */

/* CAMBIA ESTE NÚMERO */
const numero = "593999999999";

/* ======================================== */
/* 💬 BOTONES WHATSAPP */
/* ======================================== */

const btnNo = document.querySelector(".No");
const btnObvio = document.querySelector(".obvio");
const btnMaybe = document.querySelector(".maybe");

function openWhatsApp(message, event){

    createExplosion(event);

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}

if(btnNo){

    btnNo.addEventListener("click",(e)=>{

        openWhatsApp("Elegí No 💔", e);

    });

}

if(btnObvio){

    btnObvio.addEventListener("click",(e)=>{

        openWhatsApp("Obvio que sí 🥰", e);

    });

}

if(btnMaybe){

    btnMaybe.addEventListener("click",(e)=>{

        openWhatsApp("Tal vez... 👀", e);

    });

}

/* ======================================== */
/* 💖 CORAZONES FLOTANTES */
/* ======================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("floating");

    const hearts = [
        "💖",
        "💕",
        "💗",
        "💞",
        "💘",
        "🌸"
    ];

    const colors = [
        "#ff4fa3",
        "#ff7ac3",
        "#ff94d2",
        "#ff5ea8",
        "#ff3d96",
        "#ffc1e3"
    ];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.animationDuration =
    (Math.random() * 5 + 6) + "s";

    heart.style.fontSize =
    (Math.random() * 22 + 18) + "px";

    heart.style.opacity =
    (Math.random() * 0.5 + 0.4);

    heart.style.color =
    colors[Math.floor(Math.random()*colors.length)];

    heart.style.transform =
    `rotate(${Math.random()*360}deg)`;

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

/* MÁS CORAZONES */

setInterval(createHeart, 500);

/* ======================================== */
/* ✨ SPARKLES */
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
    (Math.random()*12+10)+"px";

    sparkle.style.opacity =
    (Math.random()*0.5+0.4);

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

setInterval(createSparkle,1800);

/* ======================================== */
/* 💥 EXPLOSIÓN */
/* ======================================== */

function createExplosion(event){

    const x = event.clientX;
    const y = event.clientY;

    for(let i=0;i<25;i++){

        const sparkle =
        document.createElement("span");

        sparkle.classList.add("sparkle");

        const emojis = [
            "💖",
            "💕",
            "💗",
            "✨"
        ];

        sparkle.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

        sparkle.style.position = "fixed";

        sparkle.style.left =
        (x + (Math.random()*140 - 70)) + "px";

        sparkle.style.top =
        (y + (Math.random()*140 - 70)) + "px";

        sparkle.style.fontSize =
        (Math.random()*22+12)+"px";

        sparkle.style.pointerEvents =
        "none";

        sparkle.style.zIndex = "9999";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },2000);

    }

}

/* ======================================== */
/* 🎵 MÚSICA */
/* ======================================== */

const music =
document.getElementById("music");

const musicBtn =
document.querySelector(".music-icon");

const playBtn =
document.getElementById("playBtn");

/* AUTO PLAY */

window.addEventListener("load",()=>{

    if(music){

        music.volume = 0.45;

        music.play().then(()=>{

            startMusicAnimation();

        }).catch(()=>{

            console.log("Autoplay bloqueado");

        });

    }

});

/* SI CELULAR BLOQUEA */

document.body.addEventListener("click",()=>{

    if(music){

        music.play();

        startMusicAnimation();

    }

},{ once:true });

/* BOTÓN NAV */

if(musicBtn){

    musicBtn.addEventListener("click",()=>{

        toggleMusic();

    });

}

/* BOTÓN PLAYER */

if(playBtn){

    playBtn.addEventListener("click",()=>{

        toggleMusic();

    });

}

/* TOGGLE */

function toggleMusic(){

    if(!music) return;

    if(music.paused){

        music.play();

        if(musicBtn){

            musicBtn.innerHTML = "🎵";

        }

        if(playBtn){

            playBtn.innerHTML = "⏸";

        }

        startMusicAnimation();

    }else{

        music.pause();

        if(musicBtn){

            musicBtn.innerHTML = "🔇";

        }

        if(playBtn){

            playBtn.innerHTML = "▶";

        }

        stopMusicAnimation();

    }

}

/* ======================================== */
/* 🎵 ANIMACIÓN ICONO */
/* ======================================== */

function startMusicAnimation(){

    if(musicBtn){

        musicBtn.style.animation =
        "spin 3s linear infinite";

    }

}

function stopMusicAnimation(){

    if(musicBtn){

        musicBtn.style.animation =
        "none";

    }

}

/* ======================================== */
/* ✨ SCROLL EFFECT */
/* ======================================== */

window.addEventListener("scroll",()=>{

    const scroll =
    window.scrollY;

    const glow1 =
    document.querySelector(".glow1");

    const glow2 =
    document.querySelector(".glow2");

    const nav =
    document.querySelector("nav");

    if(glow1){

        glow1.style.transform =
        `translateY(${scroll * 0.04}px)`;

    }

    if(glow2){

        glow2.style.transform =
        `translateY(-${scroll * 0.04}px)`;

    }

    /* NAVBAR */

    if(nav){

        if(scroll > 40){

            nav.style.background =
            "rgba(22, 14, 45, 0.85)";

            nav.style.backdropFilter =
            "blur(20px)";

            nav.style.boxShadow =
            "0 0 20px rgba(0,0,0,0.25)";

        }else{

            nav.style.background =
            "rgba(22, 14, 45, 0.55)";

        }

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
/* ✨ EFECTO ENTRADA */
/* ======================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition =
        "1.2s";

        document.body.style.opacity = "1";

    },200);

});

/* ======================================== */
/* ✨ CSS EXTRA */
/* ======================================== */

const style =
document.createElement("style");

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
