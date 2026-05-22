```js
/* ======================================== */
/* 📱 WHATSAPP */
/* ======================================== */

const numero = "593999999999";

const btnNo = document.querySelector(".no");
const btnObvio = document.querySelector(".obvio");
const btnMaybe = document.querySelector(".maybe");

function openWhatsApp(message){

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

if(btnNo){

    btnNo.addEventListener("click",()=>{

        openWhatsApp("Elegí No 💔");

    });
}

if(btnObvio){

    btnObvio.addEventListener("click",()=>{

        openWhatsApp("Obvio que sí 🥰");

    });
}

if(btnMaybe){

    btnMaybe.addEventListener("click",()=>{

        openWhatsApp("Tal vez... 👀");

    });
}

/* ======================================== */
/* 🎵 MÚSICA */
/* ======================================== */

const music = document.getElementById("music");
const musicBtn = document.querySelector(".music-icon");
const playBtn = document.getElementById("playBtn");

/* intento autoplay */
window.addEventListener("load",()=>{

    if(!music) return;

    music.volume = 0.45;

    const promise = music.play();

    if(promise !== undefined){

        promise.catch(()=>{

            console.log("Autoplay bloqueado por navegador");

        });
    }
});

/* primer click desbloquea música en móvil */
document.body.addEventListener("click",()=>{

    if(music && music.paused){

        music.play().catch(()=>{});

    }

},{ once:true });

/* toggle música */

function toggleMusic(){

    if(!music) return;

    if(music.paused){

        music.play().catch(()=>{});

        if(musicBtn){
            musicBtn.innerHTML = "🎵";
        }

        if(playBtn){
            playBtn.innerHTML = "⏸";
        }

    }else{

        music.pause();

        if(musicBtn){
            musicBtn.innerHTML = "🔇";
        }

        if(playBtn){
            playBtn.innerHTML = "▶";
        }
    }
}

if(musicBtn){

    musicBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        toggleMusic();

    });
}

if(playBtn){

    playBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        toggleMusic();

    });
}

/* ======================================== */
/* ✨ ANIMACIÓN TARJETAS */
/* ======================================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);
});

/* ======================================== */
/* ✨ ENTRADA SUAVE */
/* ======================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition = "opacity 1s ease";

        document.body.style.opacity = "1";

    },100);

});

/* ======================================== */
/* ✨ NAVBAR SCROLL */
/* ======================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(!nav) return;

    if(window.scrollY > 40){

        nav.style.background = "rgba(22,15,45,0.92)";

    }else{

        nav.style.background = "rgba(22,15,45,0.75)";
    }
});

/* ======================================== */
/* ✅ FIX OVERFLOW */
/* ======================================== */

/* evita scroll raro github pages */

window.addEventListener("resize",()=>{

    document.body.style.overflowX = "hidden";

});

/* seguridad extra */

document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";
```
