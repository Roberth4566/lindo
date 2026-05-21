```javascript
/* ======================================== */
/* 📱 NÚMERO WHATSAPP */
/* ======================================== */

/* CAMBIA ESTE NÚMERO */
const numero = "593999999999";

/* ======================================== */
/* 💬 BOTONES WHATSAPP */
/* ======================================== */

const btnNo =
document.querySelector(".No");

const btnObvio =
document.querySelector(".obvio");

const btnMaybe =
document.querySelector(".maybe");

/* BOTÓN NO */

if(btnNo){

    btnNo.addEventListener("click",(e)=>{

        createExplosion(e);

        window.open(
        `https://wa.me/${numero}?text=Elegí%20No%20💔`
        );

    });

}

/* BOTÓN OBVIO */

if(btnObvio){

    btnObvio.addEventListener("click",(e)=>{

        createExplosion(e);

        window.open(
        `https://wa.me/${numero}?text=Obvio%20que%20sí%20🥰`
        );

    });

}

/* BOTÓN TAL VEZ */

if(btnMaybe){

    btnMaybe.addEventListener("click",(e)=>{

        createExplosion(e);

        window.open(
        `https://wa.me/${numero}?text=Tal%20vez...%20👀`
        );

    });

}

/* ======================================== */
/* 💖 MUCHOS CORAZONES FLOTANTES */
/* ======================================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("floating");

    /* DIFERENTES CORAZONES */

    const hearts = [
        "💖",
        "💕",
        "💗",
        "💞",
        "💘",
        "🌸"
    ];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    /* POSICIÓN */

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    /* DURACIÓN */

    heart.style.animationDuration =
    (Math.random() * 5 + 6) + "s";

    /* TAMAÑO */

    heart.style.fontSize =
    (Math.random() * 22 + 18) + "px";

    /* OPACIDAD */

    heart.style.opacity =
    (Math.random() * 0.5 + 0.4);

    /* ROTACIÓN */

    heart.style.transform =
    `rotate(${Math.random()*360}deg)`;

    /* COLOR MÁS VIVO */

    const colors = [
        "#ff4fa3",
        "#ff7ac3",
        "#ff94d2",
        "#ff5ea8",
        "#ff3d96"
    ];

    heart.style.color =
    colors[Math.floor(Math.random()*colors.length)];

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

/* MUCHOS MÁS CORAZONES */

setInterval(createHeart,500);

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
    (Math.random()*12+10)+"px";

    sparkle.style.opacity =
    (Math.random()*0.5+0.4);

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

/* MÁS ESTRELLAS */

setInterval(createSparkle,1800);

/* ======================================== */
/* 💥 EXPLOSIÓN BOTONES */
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
/* 🎵 MÚSICA AUTOMÁTICA */
/* ======================================== */

window.addEventListener("load",()=>{

    const music =
    document.getElementById("music");

    if(music){

        music.volume = 0.45;

        music.play().then(()=>{

            startMusicAnimation();

        }).catch(()=>{

            console.log(
            "Autoplay bloqueado"
            );

        });

    }

});

/* ======================================== */
/* 📱 SI CELULAR BLOQUEA */
/* ======================================== */

document.body.addEventListener("click",()=>{

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

    musicBtn.addEventListener("click",()=>{

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
/* ✨ EFECTO SCROLL */
/* ======================================== */

window.addEventListener("scroll",()=>{

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
/* ✨ EFECTO NAVBAR */
/* ======================================== */

window.addEventListener("scroll",()=>{

    const nav =
    document.querySelector("nav");

    if(window.scrollY > 40){

        nav.style.background =
        "rgba(15,15,35,0.75)";

        nav.style.backdropFilter =
        "blur(20px)";

    }else{

        nav.style.background =
        "rgba(10,10,30,0.35)";

    }

});

/* ======================================== */
/* ✨ CSS EXTRA DESDE JS */
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
```

