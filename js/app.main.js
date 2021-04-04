const loadAnimationCes=()=>{


  
    gsap.registerPlugin(ScrollTrigger);
    var about_animations = gsap.timeline({
  
            scrollTrigger: {
            trigger: ".about-section",
            scrub: true,
            pin:true,
            start: "top top",
            end: "+=100%"
        }
        
    });
        
        about_animations.to('.memphiselements',{
            
            y:-10,
            opacity:0,
            duration:1,

        })
        about_animations.to('#about-heading',{
            
           
            duration:1

        })

        about_animations.to('#about-heading',{
            
          
            opacity:0,
            duration:1,
            stagger:0.4


        })
        
       
       

    gsap.from('#hero-text',{
        opacity:0,
       
       
        
    })
    gsap.to('#hero-text',{
        opacity:1,
        duration:2,
        

        
    })

        
        
    var menubtn = document.getElementById("menu-btn");
    var nav = document.getElementById("nav");
    var close = document.getElementById("closenav");
    menubtn.addEventListener("click",()=>{
        nav.style.display="block"
    })
    close.addEventListener("click",()=>{
        nav.style.display="none"
    })
    window.onclick = function(event){
        if (event.target == nav) {
                nav.style.display = "none";
            }

    }


    gsap.from('#form-animate',{
        opacity: 0,
        x:-50,
        stagger:0.5,
        duration:0.5
        
    })
   gsap.from('#mailimage',{
       opacity: 0,
       duration:0.4
   })
        
    

}
