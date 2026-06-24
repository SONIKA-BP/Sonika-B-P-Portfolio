// ======================================

// SONIKA B P PORTFOLIO

// script.js

// ======================================

 

// ===============================

// MOBILE MENU

// ===============================

 

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

 

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

 

        navLinks.classList.toggle("active");

 

        if (navLinks.classList.contains("active")) {

            menuBtn.innerHTML =

                '<i class="fas fa-times"></i>';

        } else {

            menuBtn.innerHTML =

                '<i class="fas fa-bars"></i>';

        }

 

    });

}

 

// Close mobile menu after click

 

document.querySelectorAll(".nav-links a")

.forEach(link => {

 

    link.addEventListener("click", () => {

 

        navLinks.classList.remove("active");

 

        if(menuBtn){

            menuBtn.innerHTML =

            '<i class="fas fa-bars"></i>';

        }

 

    });

 

});

 

// ===============================

// ABOUT TABS

// ===============================

 

const tabs =

document.querySelectorAll(".tab-link");

 

const contents =

document.querySelectorAll(".tab-content");

 

tabs.forEach(tab => {

 

    tab.addEventListener("click", () => {

 

        tabs.forEach(item =>

            item.classList.remove("active")

        );

 

        contents.forEach(content =>

            content.classList.remove("active-content")

        );

 

        tab.classList.add("active");

 

        document

            .getElementById(tab.dataset.tab)

            .classList.add("active-content");

 

    });

 

});

 

// ===============================

// TYPEWRITER EFFECT

// ===============================

 

const typingElement =

document.querySelector(".typing-text");

 

const roles = [

 

    "Data Analyst",

 

    "SQL Developer",

 

    "Power BI Developer",

 

    "AWS Data Analyst",

 

    "Python Enthusiast"

 

];

 

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

 

function typeEffect() {

 

    if (!typingElement) return;

 

    const currentRole =

        roles[roleIndex];

 

    if (!deleting) {

 

        typingElement.textContent =

            currentRole.substring(

                0,

                charIndex + 1

            );

 

        charIndex++;

 

        if (

            charIndex ===

            currentRole.length

        ) {

 

            deleting = true;

 

            setTimeout(

                typeEffect,

                1500

            );

 

            return;

        }

 

    } else {

 

        typingElement.textContent =

            currentRole.substring(

                0,

                charIndex - 1

            );

 

        charIndex--;

 

        if (charIndex === 0) {

 

            deleting = false;

 

            roleIndex++;

 

            if (

                roleIndex === roles.length

            ) {

                roleIndex = 0;

            }

 

        }

 

    }

 

    setTimeout(

        typeEffect,

        deleting ? 50 : 100

    );

 

}

 

window.addEventListener("load", () => {

 

    setTimeout(typeEffect, 1000);

 

});

 

// ===============================

// ACTIVE NAVBAR

// ===============================

 

const sections =

document.querySelectorAll("section");

 

const navItems =

document.querySelectorAll(".nav-links a");

 

window.addEventListener("scroll", () => {

 

    let current = "";

 

    sections.forEach(section => {

 

        const sectionTop =

            section.offsetTop - 150;

 

        const sectionHeight =

            section.offsetHeight;

 

        if (

            window.scrollY >= sectionTop &&

            window.scrollY <

            sectionTop + sectionHeight

        ) {

 

            current =

            section.getAttribute("id");

 

        }

 

    });

 

    navItems.forEach(link => {

 

        link.classList.remove("active-nav");

 

        if (

            link.getAttribute("href")

            === "#" + current

        ) {

 

            link.classList.add("active-nav");

 

        }

 

    });

 

});

 

// ===============================

// STICKY NAVBAR

// ===============================

 

const header =

document.querySelector(".header");

 

window.addEventListener("scroll", () => {

 

    if (!header) return;

 

    if (window.scrollY > 50) {

 

        header.style.background =

        "rgba(15,23,42,0.97)";

 

        header.style.boxShadow =

        "0 5px 20px rgba(0,0,0,0.25)";

 

    } else {

 

        header.style.background =

        "rgba(15,23,42,0.85)";

 

        header.style.boxShadow =

        "none";

 

    }

 

});

 

// ===============================

// SCROLL REVEAL

// ===============================

 

const revealElements =

document.querySelectorAll(

 

    ".about-left," +

    ".about-right," +

    ".experience-card," +

    ".skill-category," +

    ".project-card," +

    ".contact-card"

 

);

 

function revealOnScroll() {

 

    revealElements.forEach(

        element => {

 

            const windowHeight =

                window.innerHeight;

 

            const elementTop =

                element

                .getBoundingClientRect()

                .top;

 

            const revealPoint = 120;

 

            if (

                elementTop <

                windowHeight - revealPoint

            ) {

 

                element.classList.add(

                    "show"

                );

 

            }

 

        }

    );

 

}

 

window.addEventListener(

    "scroll",

    revealOnScroll

);

 

window.addEventListener(

    "load",

    revealOnScroll

);

 

// ===============================

// COUNTER ANIMATION

// ===============================

 

const counters =

document.querySelectorAll(

    ".stat-card h3"

);

 

function animateCounter(

    counter,

    target

) {

 

    let count = 0;

 

    const updateCounter = () => {

 

        if (count < target) {

 

            count++;

 

            counter.innerText = count;

 

            setTimeout(

                updateCounter,

                100

            );

 

        } else {

 

            // counter.innerText = target;
            if(counter.dataset.plus=="true"){
                counter.innerText=target+ " +";
            } else{
                counter.innerText=target;
            }

 

        }

 

    };

 

    updateCounter();

 

}

 

window.addEventListener(

    "load",

    () => {

 

        counters.forEach(

            counter => {

 

                const value =

                    parseInt(

                        counter.innerText

                    );

 

                if (

                    !isNaN(value)

                ) {

 

                    counter.innerText = "0";

 

                    animateCounter(

                        counter,

                        value

                    );

 

                }

 

            }

        );

 

    }

);

 

// ===============================

// SCROLL TO TOP BUTTON

// ===============================

 

const scrollBtn =

document.createElement("button");

 

scrollBtn.innerHTML =

'<i class="fas fa-arrow-up"></i>';

 

scrollBtn.classList.add(

    "scroll-top"

);

 

document.body.appendChild(

    scrollBtn

);

 

window.addEventListener(

    "scroll",

    () => {

 

        if (

            window.scrollY > 500

        ) {

 

            scrollBtn.classList.add(

                "show-scroll"

            );

 

        } else {

 

            scrollBtn.classList.remove(

                "show-scroll"

            );

 

        }

 

    }

);

 

scrollBtn.addEventListener(

    "click",

    () => {

 

        window.scrollTo({

 

            top: 0,

 

            behavior: "smooth"

 

        });

 

    }

);

 

// ===============================

// FOOTER YEAR

// ===============================

 

const footerText =

document.querySelector("footer p");

 

if (footerText) {

 

    footerText.innerHTML =

 

    `© ${new Date().getFullYear()}

    Sonika B P | Data Analyst Portfolio`;

 

}

 

// ===============================

// CONSOLE MESSAGE

// ===============================

 

console.log(

    "%cWelcome to Sonika B P Portfolio 🚀",

    "color:#38bdf8;font-size:16px;font-weight:bold;"

);