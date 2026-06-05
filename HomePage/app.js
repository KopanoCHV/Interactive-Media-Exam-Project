//----Load screen logic------

let loader = document.querySelector("#page-load");

window.addEventListener("load", (event) => {

    loader.style.display = "none";

});

//----Image modal logic-------

const openImg = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

const openImg2 = document.getElementById("openModal-2");
const closeBtn2 = document.getElementById("closeModal-2");
const modal2 = document.getElementById("modal-2");

openImg.addEventListener("click",(event) => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", (event) => {
    modal.classList.remove("open");
});

openImg2.addEventListener("click",(event) => {
    modal2.classList.add("open");
});

closeBtn2.addEventListener("click", (event) => {
    modal2.classList.remove("open");
});

//----Page navigation logic---------

const homeNav = document.querySelector("#home-navigation");
const portfolioNav = document.querySelector("#portfolio-navigation");
const projectsNav = document.querySelector("#projects-navigation");
const aboutNav = document.querySelector("#about-page-navigation");
const nextPageNav = document.querySelector("#next-page-navigation");

homeNav.addEventListener("click", (event) => {

    window.location.href = "../index.html";

});

portfolioNav.addEventListener("click", (event) => {

    window.location.href = "../PortfolioPage/PortfolioPage.html";

});

projectsNav.addEventListener("click", (event) => {

    window.location.href = "../Project1/Project1.html";

})

aboutNav.addEventListener("click", (event) => {

    window.location.href = "../AboutPage/AboutPage.html";

});

nextPageNav.addEventListener("click", (event) => {

    window.location.href = "../PortfolioPage/PortfolioPage.html"

});

//----Project page sub navigation logic---------

const controlBtn = document.querySelector("#modal-control");

const linkModal = document.querySelector("#link-modal");

controlBtn.addEventListener("click", (event) => {

    linkModal.classList.toggle("open");

});

window.addEventListener('scroll', (event) => {

    linkModal.classList.remove("open");

});

const Project1 = document.querySelector("#project1");
const Project2 = document.querySelector("#project2");
const Project3 = document.querySelector("#project3");
const Project4 = document.querySelector("#project4");

Project1.addEventListener("click", (event) => {

    window.location.href = "../Project1/Project1.html";

});

Project2.addEventListener("click", (event) => {

    window.location.href = "../Project2/Project2.html";

});

Project3.addEventListener("click", (event) => {

    window.location.href = "../Project3/Project3.html";

})

Project4.addEventListener("click", (event) => {

    window.location.href = "../Project4/Project4.html";

});

//----Navigation Highlight logic------

// Using window.location to get the path of the open page.

const currentPage = window.location.pathname;

if(currentPage === '/index.html'){

    homeNav.classList.add("current");

    portfolioNav.classList.remove("current");

    projectsNav.classList.remove("current");

    aboutNav.classList.remove("current");

    Project1.classList.remove("current");

    Project2.classList.remove("current");

    Project3.classList.remove("current");

    Project4.classList.remove("current");
}

//----Dark mode logic-----------

const switchBtn = document.querySelector("#switch");

const bodyElement = document.querySelector(".main-section");

// Check for saved preference on page load

const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "enabled") {

  bodyElement.classList.add("dark-mode");

  switchBtn.checked = true;

}

switchBtn.addEventListener("change", (event) => {

    bodyElement.classList.toggle('dark-mode');

    // Save preference

    if (bodyElement.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");

    } else {

        localStorage.setItem("darkMode", "disabled");

    }

});