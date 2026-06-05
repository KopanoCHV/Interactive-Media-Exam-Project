//----Load Page logic----------

let loader = document.querySelector("#page-load");

window.addEventListener("load", (event) => {

    loader.style.display = "none";

});

//----Page Navigation links logic-----------

const homeNav = document.querySelector("#home-navigation");
const portfolioNav = document.querySelector("#portfolio-navigation");
const projectsNav = document.querySelector("#projects-navigation");
const aboutNav = document.querySelector("#about-page-navigation");
const nextPageNav = document.querySelector("#next-page-navigation")
const prevPageNav = document.querySelector("#previous-page-navigation");

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

    window.location.href = "../Project1/Project1.html";

});

prevPageNav.addEventListener("click", (event) => {

    window.location.href = "../index.html";
});

//----Project page sub-navigation logic------------

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

});

Project4.addEventListener("click", (event) => {

    window.location.href = "../Project4/Project4.html";

});

//-----Navigation Highlight logic-------------

// Using window.location to get the path of the open page.

const currentPage = window.location.pathname;

if(currentPage === '/PortfolioPage/PortfolioPage.html'){

    homeNav.classList.remove("current");

    portfolioNav.classList.add("current");

    projectsNav.classList.remove("current");

    aboutNav.classList.remove("current");

    Project1.classList.remove("current");

    Project2.classList.remove("current");

    Project3.classList.remove("current");

    Project4.classList.remove("current");
}

//----Dark mode logic-----------------

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

//----Project View Logic------------------

const wakeUpView = document.querySelector("#wake-up-view");

const morabarabaView = document.querySelector("#morabaraba-view");

const backHomeView = document.querySelector("#back-home-view");

const climbUpView = document.querySelector("#climb-up-view");

wakeUpView.addEventListener("click", (event) => {

    window.location.href = "../Project3/Project3.html";

});

morabarabaView.addEventListener("click", (event) => {

    window.location.href = "../Project1/Project1.html";

});

backHomeView.addEventListener("click", (event) => {

    window.location.href = "../Project2/Project2.html";
});

climbUpView.addEventListener("click", (event) => {

    window.location.href = "../Project4/Project4.html";
});

//----View Project button appear/disappear logic--------

const morabarabaCont = document.querySelector("#morabaraba-container");

const backHomeCont = document.querySelector("#back-home-container");

const wakeUpCont = document.querySelector("#wake-up-container");

const climbUpCont = document.querySelector("#climb-up-container");

morabarabaCont.addEventListener("mouseenter", (event) => {

    morabarabaView.classList.add("appear");
});

morabarabaCont.addEventListener("mouseleave", (event) => {

    morabarabaView.classList.remove("appear");
});

backHomeCont.addEventListener("mouseenter", (event) => {

    backHomeView.classList.add("appear");
});

backHomeCont.addEventListener("mouseleave", (event) => {

    backHomeView.classList.remove("appear");
});

wakeUpCont.addEventListener("mouseenter", (event) => {

    wakeUpView.classList.add("appear");
});

wakeUpCont.addEventListener("mouseleave", (event) => {

    wakeUpView.classList.remove("appear");
});

climbUpCont.addEventListener("mouseenter", (event) => {

    climbUpView.classList.add("appear");
});

climbUpCont.addEventListener("mouseleave", (event) => {

    climbUpView.classList.remove("appear");
});