const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SECTION
const section= document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
const scene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElemnt: intro,
    triggerHook: 0
})
//    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Video Animation
let accelamount = 0.9;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 300;
    console.log(scrollpos);
});

setInterval(()=>{
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);
    video.currentTime = delay;
}, 33.3);
