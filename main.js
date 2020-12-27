    let navSlide = () =>{
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".navmenu");
    let navLinks = document.querySelectorAll(".navmenu li");
    burger.addEventListener ("click", ()=> {
        nav.classList.toggle("nav-active");
       navLinks.forEach((link,index)=>{
            
            if(link.style.animation){
                link.style.animation="";
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease-in forward ${index / 5 + 1.5}s`;
                    
            }

        })
        
    });
}
navSlide();