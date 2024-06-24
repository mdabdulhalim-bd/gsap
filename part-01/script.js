const tl = gsap.timeline();
tl.from("#nav h2",{
   duration:1,
   y:-30,
   opacity:0,
})

tl.from("#nav ul li",{
    duration:1,
    y:30,
    opacity:0,
    stagger:0.3,
 })

 tl.from("h1",{
    y: -30,
    opacity:0,
    duration:1,
 })