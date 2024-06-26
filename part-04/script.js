let overlay = document.querySelector("#overlay");
let cursor = document.querySelector("#cursor");



window.addEventListener("mousemove", function(dets){
    cursor.innerText = "View More"
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        
    })
})

overlay.addEventListener("mouseleave", ()=>{
    gsap.to(cursor,{
        scale:0.5,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
       })
})

overlay.addEventListener("mouseenter", ()=>{
   gsap.to(cursor,{
    scale: 1.5,
    duration: 0.5,
    ease: "elastic.out(1, 0.3)"
   })
})