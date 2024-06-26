var tl = gsap.timeline();


const menuIcon = document.querySelector(".menu i");
const closeIcon = document.querySelector(".close-icon i");

menuIcon.addEventListener("click", () => {
    tl.to("#side-menu",{
        duration:1,
        right:0,
    })
})

closeIcon.addEventListener("click", () => {
    tl.to("#side-menu",{
        right:"-100%",
        duration:1,
       
    })
})