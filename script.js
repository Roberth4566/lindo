```javascript id="n4tp8f"
const numero = "593995296138";

/* ======================================== */
/* 💬 BOTONES WHATSAPP */
/* ======================================== */

document.querySelector(".yes").addEventListener("click", ()=>{

    createExplosion();

    window.open(
    `https://wa.me/${numero}?text=Elegí%20SI%20💖`
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

    heart.style.left = Math.random() * 100 + "vw";

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

    const sparkle = document.createElement("span");

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
/* ✨ EFECTO AL CARGAR */
/* ======================================== */

window.addEventListener("load", ()=>{

    createExplosion();

});
```
