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

    var c1 = gsap.timeline({
  
            scrollTrigger: {
            trigger: ".about-section",
        
            scrub: true,
            pin:true,
            start: "top top",
            end: "+=100%"
        }
        
        });

        c1.to('#about-heading',{
            
            y:-50,

        })

      c1.to('#about-heading',{
          
          x:-520,
          opacity:0,

      })

   
      
    // gsap.from('.hi',{
    //     scale:0,
    // })
    // gsap.to('.hi',{
    //     scale:1,
    //     duration:2,
    //     ease:Back.easeOut.config(2),
    //     stagger:0.1,
    //     delay:1
    // })

    
    // gsap.from('.objects',{
    //     scale:0,
    // })
    // gsap.to('.objects',{
    //     scale:1,
    //     duration:2,
    //     ease:Back.easeOut.config(2),
    //     loop:true,
    //     stagger:0.1,
        
    // })
    // gsap.from('.background',{
    //     scale:0,
    // })
    // gsap.to('.background',{
    //     scale:1.3,
    //     duration:1.5,
    //     ease:Back.easeOut.config(2),
    //     loop:true,
    //     stagger:0.1,
    //     delay:3,
    // })
    // gsap.from('.appear',{
    //   opacity:0,
    //   duration:2,

    // })
    // gsap.to('.appear',{
    //   opacity:1,
    //   duration:1.5,
      
    // })
    gsap.from('.headtext',{
        
        y:-20,
        stagger:0.1,
        opacity:0,
        duration:0.3,
       
    })
    gsap.to('.headtext',{
        
        y:20,
        
        
    })
    gsap.from('.home-para',{
        opacity:0,
        stagger:0.1,
    })
    gsap.to('.home-para',{
        opacity:1,
        duration:4
    })
    
    // gsap.from('.rocket',{
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
        
    

}
