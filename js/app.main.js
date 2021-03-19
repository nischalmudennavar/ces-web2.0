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

    
var modal = document.getElementById("modal-1");

// Get the button that opens the modal
var btn = document.getElementById("event-modal-1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}
