const springsDOM = document.querySelectorAll(".spring");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

spring0 = {
    height: 0,
    speed: 0,
    num: 0,
};

spring1 = {
    height: 0,
    speed: 0,
    num: 1,
};

spring2 = {
    height: 0,
    speed: 0,
    num: 2,
};

const springsJS = [spring0, spring1, spring2];

const targetHeight = 300;
let height0 = 0;
let height1 = 0;
let height2 = 0;
const tension = 0.025;
const damp = 0.035;
let speed = 0;

const springBounce = (s) => {
    const num = s.num;
    let displacement = targetHeight - s.height;
    s.speed += tension * displacement - damp * s.speed;
    s.height += s.speed;

    springsDOM[num].style.height = s.height + "px";
    springsDOM[num].addEventListener("mouseenter", () => {
        s.height = event.clientY * 0.1;
    });
};

const tick = () => {
    window.requestAnimationFrame(tick);

    springBounce(spring0);
    springBounce(spring1);
    springBounce(spring2);
};

tick();
