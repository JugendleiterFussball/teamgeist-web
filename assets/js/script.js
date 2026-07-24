/* ==========================================
   TEAM.GEIST.
   Version 0.1
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* -------------------------------------- */
/* Fade-In Animation                      */
/* -------------------------------------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(".intro, .teaser, .quote").forEach(section => {

    section.classList.add("fade");

    observer.observe(section);

});


/* -------------------------------------- */
/* Smooth Scroll für interne Links        */
/* -------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
