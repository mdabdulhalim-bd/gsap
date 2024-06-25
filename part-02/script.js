gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    // duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        markers:true,
        scrub:2,
        pin:true,
        
    }
})
































// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:1,
//     y:-40,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 30%",
//         end:"top 90%",
//         scrub:1,
//     }
// })

// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:1,
//     y:30,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 30%",
//         end:"top 90%",
//         scrub:1,

//     }
// })