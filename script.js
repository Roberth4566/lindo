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

window.addEventListener("load",()=>{

    if(!music) return;

    music.volume = 0.45;

    music.play().catch(()=>{});

});

/* TOGGLE */

function toggleMusic(){

    if(!music) return;

    if(music.paused){

        music.play();

        if(musicBtn) musicBtn.innerHTML = "🎵";
        if(playBtn) playBtn.innerHTML = "⏸";

    }else{

        music.pause();

        if(musicBtn) musicBtn.innerHTML = "🔇";
        if(playBtn) playBtn.innerHTML = "▶";
    }
}

if(musicBtn){
    musicBtn.addEventListener("click", toggleMusic);
}

if(playBtn){
    playBtn.addEventListener("click", toggleMusic);
}

/* ======================================== */
/* ✨ ANIMACIÓN TARJETAS */
/* ======================================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
        }

    });

},{ threshold:0.2 });

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

        document.body.style.transition = "1s";
        document.body.style.opacity = "1";

    },100);

});
