const loadAnimationCes=()=>{

    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hi',{
        scale:0,
    })
    gsap.to('.hi',{
        scale:1,
        duration:2,
        ease:Back.easeOut.config(2),
        stagger:0.1,
        delay:1
    })

    
    gsap.from('.objects',{
        scale:0,
    })
    gsap.to('.objects',{
        scale:1,
        duration:2,
        ease:Back.easeOut.config(2),
        loop:true,
        stagger:0.1,
        
    })
    gsap.from('.background',{
        scale:0,
    })
    gsap.to('.background',{
        scale:1.3,
        duration:1.5,
        ease:Back.easeOut.config(2),
        loop:true,
        stagger:0.1,
        delay:3,
    })

}