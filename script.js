// =========================
// Typing Animation
// =========================


const typingElement = document.getElementById("typing");


const roles = [

    "Data Analyst",
    "Frontend Developer",
    "Digital Marketing Associate",
    "CSE Student"

];


let roleIndex = 0;
let charIndex = 0;
let deleting = false;



function typeEffect(){


    let currentRole = roles[roleIndex];


    if(!deleting){


        typingElement.textContent =
        currentRole.substring(0,charIndex + 1);


        charIndex++;


        if(charIndex === currentRole.length){


            deleting = true;


            setTimeout(typeEffect,1200);

            return;

        }


    }else{


        typingElement.textContent =
        currentRole.substring(0,charIndex - 1);


        charIndex--;


        if(charIndex === 0){


            deleting = false;


            roleIndex++;


            if(roleIndex >= roles.length){

                roleIndex = 0;

            }


        }


    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );


}


typeEffect();







// =========================
// Mobile Menu
// =========================


const menuButton =
document.querySelector(".menu");


const navLinks =
document.querySelector(".nav-links");



menuButton.addEventListener("click",()=>{


    if(navLinks.style.display === "flex"){

        navLinks.style.display="none";

    }

    else{

        navLinks.style.display="flex";

        navLinks.style.flexDirection="column";

        navLinks.style.position="absolute";

        navLinks.style.top="80px";

        navLinks.style.right="20px";

        navLinks.style.background="#0f172a";

        navLinks.style.padding="30px";

        navLinks.style.borderRadius="15px";

    }


});







// =========================
// Close Mobile Menu
// =========================


document
.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        if(window.innerWidth < 900){

            navLinks.style.display="none";

        }


    });


});







// =========================
// Scroll Reveal Animation
// =========================


const cards =
document.querySelectorAll(".card");



const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0)";


        }


    });


},{
    threshold:0.15
});




cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform=
    "translateY(40px)";

    card.style.transition=
    "all .8s ease";


    observer.observe(card);


});







// =========================
// Navbar Background
// =========================


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.background=
        "rgba(15,23,42,.9)";


        header.style.backdropFilter=
        "blur(15px)";


    }

    else{


        header.style.background="transparent";


    }


});







// =========================
// Current Year Footer
// =========================


const footer =
document.querySelector("footer p");


const year =
new Date().getFullYear();



footer.innerHTML =
`© ${year} Kefayet Ullah Arif. All Rights Reserved.`;