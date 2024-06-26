const navbarIcon = document.querySelector(".icon-bar i");
const sidebarIcon = document.querySelector("#side-menu i");

let tl = gsap.timeline();

tl.to("#side-menu ",{
    right:0,
    duration:0.3,
    ease:"power1.out"
})

tl.from("#side-menu h4",{
    x:100,
    opacity:0,
    duration:0.2,
    stagger:0.20,
})
tl.from("#side-menu i",{
    opacity:0,  
})
tl.pause();


navbarIcon.addEventListener("click",()=>{
   tl.play();
})
sidebarIcon.addEventListener("click",()=>{
    tl.reverse();
 })
 

// console.log(tl);mmnn