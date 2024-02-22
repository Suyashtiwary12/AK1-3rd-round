
gsap.from("#image4 , #image1, #image2",{
    y:-150,
    duration:1,
    delay:0.5
})
gsap.from("#image3 , #image5",{
    y:150,
    duration:1,
    delay:0.5
})
gsap.from("#center-text",{
    y:-100,
    duration:1,
    delay:0.5,
})
gsap.from("#center-text-2",{
    y:-100,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.from("#movie",{
    y:-250,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from("#center-text-3",{
    y:-100,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from("#entertainment",{
    y:-250,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 60%"
    }
})

