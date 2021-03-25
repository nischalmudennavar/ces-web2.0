const loadAnimationCes=()=>{


    

    gsap.registerPlugin(ScrollTrigger);


    // gsap.to("#about-heading", {
    //     scrollTrigger: {
    //       trigger: ".about-section",
    //       scrub: true,
    //       pin: true,
    //       start: "center center",
    //       end: "bottom -100%",
    //       toggleClass: "active",
    //       ease: "power2"
    //     },
    //     y:-40,
    //     opacity:0
      
      
        
    //   });

   

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
    // gsap.from('.home-para',{
    //     opacity:0,
    //     stagger:0.1,
    // })
    // gsap.to('.home-para',{
    //     opacity:1,
    //     duration:4
    // })
    
    // // gsap.from('.rocket',{
    //     rotate:0
    // })
    // gsap.to('.rocket',{
    //     rotate:330,
    //     repeat:-1
    // })

    // const textanim = new TimeLine();

        
    // var modal = document.getElementById("modal-1");

    // // // Get the button that opens the modal
    // var btn = document.getElementById("event-modal-1");

    // // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    // modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    // modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    // if (event.target == modal) {
    //     modal.style.display = "none";
    // }
    // }


        
        
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
