const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const header = document.querySelector("header");

menu.addEventListener('click',()=>{
    header.classList.add('active');
    
})
close.addEventListener('click',()=>{
    header.classList.remove('active');
})

const loader = document.getElementById('page-loader');

window.addEventListener('load',()=>{
    loader.style.display = 'none';
})




gsap.from(".main-title",{
    y:-200,
    duration:0.65,
    delay:0.8
})
gsap.from(".main-header",{
    y:-200,
    duration:0.5,
    delay:0.1,
    stagger:1
})
gsap.from(".menu-bar",{
    y:-200,
    duration:1,
    delay:0.8
})
gsap.from("nav ul li",{
    y:-200,
    duration:0.6,
    delay:0.8,
    stagger:0.2
})
gsap.from(".resume-box",{
    x:250,
    duration:2,
    delay:0.2,
    opacity:0
})

gsap.from(".left-container",{
    x:-2000,
    duration:2.5,
    delay:0.5,
    stagger:0.4
})
gsap.from(".left-container div",{
    x:-2000,
    duration:2,
    delay:0.2,
    stagger:0.4
})

gsap.from(".right-container",{
    x:200,
    duration:3,
    delay:1.2,
    opacity:0
})

gsap.from(".about-container .left-about",{
    x:-200,
    opacity:0,
    duration:1.5,
    delay:0.5,
    scrollTrigger:{
        trigger:".about-container .left-about",
        scroller:"body",
        start:"top 60%"
    }
    
})
gsap.from(".about-container .right-about",{
    x:200,
    opacity:0,
    duration:1.8,
    delay:0.5,
    scrollTrigger:{
        trigger:".about-container .right-about",
        scroller:"body",
        start:"top 60%"
    }
    
})

gsap.from(".skills-container h2",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".skills-container h2",
        scroller:"body",
        start:"50% 60%",
        end:"1000% 50%"
    }
})

gsap.from(".skills-container .skills-box",{
    x:-2000,
    opacity:0,
    duration:0.4,
    delay:0.6,
    stagger:0.2,
    scrollTrigger:{
        trigger:".skills-box",
        scroller:"body",
        start:"50% 60%",
        end:"1000% 50%"
    }
})

gsap.from(".project h1",{
    y:15,
    opacity:0,
    duration:1.5,
})
gsap.from(".p-box",{
    x:1200,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".p-box",
        scroller:"body",
        start:"20% 60%",
        end:"1500% 50%",
        // markers:true,
    }
})
