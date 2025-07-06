/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Software Engineer","Website Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



const projects = [
  {
    image: "assets/images/shareCab.png",
    title: "ShareCab",
    description: "A cab-sharing application that allows users to book and share rides with others going in the same direction, designed for daily commuters.",
    link: "https://github.com/shakir258/ShareCab"
  },
  
  {
    image: "assets/images/foodie.png",
    title: "FoodieWeb",
    description: "A stylish food delivery web app for browsing restaurants, viewing menus, and placing online orders.",
    link: "https://foodieweb258.netlify.app/"
  },
  {
    image: "assets/images/potfolio.png",
    title: "My Portfolio",
    description: "A modern and interactive portfolio website with smooth animations, Glass UI, and detailed sections for skills, projects, and contact.",
    link: "#home"
  },
  {
    image: "assets/images/traveler.png",
    title: " Traveler Website",
    description: "A travel booking website to explore destinations, compare packages, and plan trips with ease and convenience.",
    link: "https://trippixie258.netlify.app/"
  },
  {
  image: "assets/images/estudy.png",
  title: "eStudy Platform",
  description: "An eLearning website offering a wide range of academic and practical courses with a user-friendly interface.",
  link: "https://estudy258.netlify.app/"
},
{
  image: "assets/images/premier.png",
  title: "Premier Studio",
  description: "A creative portfolio website for photography and film showcasing, featuring elegant UI and carousel display.",
  link: "https://shakir1234.netlify.app/"
}
];


const container = document.getElementById("project-container1");

projects.forEach(project => {
  const box = document.createElement("div");
  box.className = "project-box";

  box.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-info">
      <h3><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.title}<span> <i class="uil uil-link"></i></span></a></h3>
      <p>${project.description}</p>
    </div>
  `;

  container.appendChild(box);
});
