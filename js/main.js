// Gsap Code

function start() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".last-home .last", {
    duration: 1,
    stagger: 0.2,
    y: 200,
    ease: "back",
    opacity: 0,
    scrollTrigger: ".last",
  });

  gsap.from(".about .img-box img", {
    duration: 1,
    x: -150,
    opacity: 0,
    scrollTrigger: ".img",
  });

  gsap.from(".about .text", {
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: ".text",
  });

  gsap.from(".about .icon-box .icon", {
    duration: 0.5,
    delay: 1.3,
    opacity: 0,
    scale: 0.5,
    stagger: 0.3,
    scrollTrigger: ".text",
  });

  gsap.from(".features .container .title", {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".features .container .title",
  });

  gsap.from(".features .img-box img", {
    duration: 1,
    delay: 0.2,
    y: 100,
    opacity: 0,
    scrollTrigger: ".features .img-box img",
  });

  gsap.from(".features .img-box svg", {
    duration: 1,
    scale: 0,
    delay: 0.4,
    scrollTrigger: ".features .img-box svg",
  });

  gsap.from(".features .text-box:first-of-type .i1", {
    duration: 0.5,
    delay: 1.5,
    x: 50,
    opacity: 0,
    scrollTrigger: ".features .img-box img",
  });

  gsap.from(".features .text-box:last-of-type .i1", {
    duration: 0.5,
    delay: 1.5,
    x: -50,
    opacity: 0,
    scrollTrigger: ".features .img-box img",
  });

  gsap.from(".features .text-box:first-of-type .i2", {
    duration: 0.5,
    delay: 2,
    x: 50,
    opacity: 0,
    scrollTrigger: ".features .img-box img",
  });

  gsap.from(".features .text-box:last-of-type .i2", {
    duration: 0.5,
    delay: 2,
    x: -50,
    opacity: 0,
    scrollTrigger: ".features .img-box img",
  });

  gsap.from(".features .text-box:first-of-type .i3", {
    duration: 0.5,
    delay: 2.5,
    x: 50,
    opacity: 0,
    scrollTrigger: ".features .img-box img",
  });

  gsap.from(".features .text-box:last-of-type .i3", {
    duration: 0.5,
    delay: 2.5,
    x: -50,
    opacity: 0,
    scrollTrigger: ".features .img-box img",
  });

  gsap.from(".awesome .title", {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".features .awesome .title",
  });

  gsap.from(".awesome .metro", {
    duration: 0.5,
    delay: 0.5,
    y: 100,
    opacity: 0,
    scrollTrigger: ".metro",
  });

  gsap.from(".screenshots .screen .title", {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".screen .title",
  });

  gsap.from(".screenshots .screen section", {
    duration: 0.5,
    delay: 0.5,
    y: 100,
    opacity: 0,
    scrollTrigger: ".screenshots section",
  });

  gsap.from(".screenshots .facts .title", {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".facts .title",
  });

  gsap.from(".screenshots .facts .icon-box", {
    duration: 1,
    delay: 1,
    y: 50,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: ".facts",
  });

  gsap.from(".price .title", {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".price .title",
  });

  gsap.from(".price .c1", {
    duration: 0.5,
    x: -100,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: ".price section",
  });

  gsap.from(".price .c2", {
    duration: 0.5,
    y: 50,
    delay: 1,
    opacity: 0,
    scrollTrigger: ".price section",
  });

  gsap.from(".price .c3", {
    duration: 0.5,
    x: 100,
    delay: 1.5,
    opacity: 0,
    scrollTrigger: ".price section",
  });

  gsap.from(".team .title", {
    duration: 1.5,
    opacity: 0,
    scrollTrigger: ".team .title",
  });

  gsap.from(".team .icon-box", {
    duration: 0.5,
    y: 100,
    opacity: 0,
    scrollTrigger: ".team .icon-box",
  });

  gsap.from(".faq .title", {
    duration: 1.5,
    opacity: 0,
    scrollTrigger: ".faq",
  });

  gsap.from(".faq .text-box", {
    duration: 0.5,
    delay: 0.2,
    x: -100,
    opacity: 0,
    scrollTrigger: ".faq .text-box",
  });

  gsap.from(".faq .img-box", {
    duration: 0.5,
    delay: 0.5,
    x: 100,
    opacity: 0,
    scrollTrigger: ".faq .text-box",
  });

  gsap.from(".news .title", {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".news .title",
  });

  gsap.from(".news .container", {
    duration: 0.5,
    y: 100,
    opacity: 0,
    scrollTrigger: ".news .container",
  });

  gsap.from(".download .text-box", {
    duration: 0.5,
    x: -100,
    opacity: 0,
    scrollTrigger: ".download .text-box",
  });

  gsap.from(".download .img-box", {
    duration: 0.5,
    delay: 0.5,
    x: 100,
    opacity: 0,
    scrollTrigger: ".download .text-box",
  });

  gsap.from(".git .title", {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".git .title",
  });

  gsap.from(".git form", {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: ".git form",
  });

  gsap.from(".git .icons-box .c1", {
    duration: 0.5,
    x: -100,
    opacity: 0,
    scrollTrigger: ".icons-box .c1",
  });

  gsap.from(".git .icons-box .c2", {
    duration: 0.5,
    delay: 0.5,
    y: 100,
    opacity: 0,
    scrollTrigger: ".icons-box .c1",
  });

  gsap.from(".git .icons-box .c3", {
    duration: 0.5,
    delay: 1,
    x: 100,
    opacity: 0,
    scrollTrigger: ".icons-box .c1",
  });
}

let navBar = document.querySelector(".home header");

window.addEventListener("load", () => start());

// Toogle Menu

let menu = document.querySelector(".home header i"),
  listMenu = document.querySelector(".home .container > ul");
menu.onclick = (_) => listMenu.classList.toggle("drop");

// Fiexd Menu

let main = Array.from(document.querySelectorAll(".mains")),
  theLi = document.querySelectorAll(".home header ul li");

menuActive();

// switcher color menu

let switcherColor = document.querySelector(".switcher-color"),
  iconColor = document.querySelector(".switcher-color .icon-box");
iconColor.onclick = () => switcherColor.classList.toggle("show");

let statusNumber = false,
  factsContainer = document.querySelector(".facts"),
  facts = document.querySelectorAll(".facts .icon-box h2");

// Window onscroll

window.addEventListener("scroll", () => {
  navMenu();
  menuActive();

  if (window.scrollY >= factsContainer.offsetTop) {
    if (!statusNumber) {
      increaseNumber();
    }
    statusNumber = true;
  }
});

// Start Video Effect

let video = document.querySelector(".video .video-box i");

video.onclick = () => {
  let screen = document.createElement("div"),
    video = document.createElement("video"),
    close = document.createElement("i");
  screen.className = "full-screen";
  video.src = "VID-20191107-WA0014.mp4";
  close.className = "fas fa-times";
  video.setAttribute("controls", "");
  screen.appendChild(video);
  screen.appendChild(close);
  document.body.appendChild(screen);
};

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-times")) {
    e.target.parentElement.remove();
  }
});

// color switcher

let bulletsColor = document.querySelectorAll(".switcher-color li");

bulletsColor.forEach((bullet) => {
  bullet.onclick = () => {
    document.documentElement.style.setProperty(
      "--main-bacground-color",
      bullet.dataset.color
    );
  };
});

activeClass(document.querySelectorAll(".awesome .icons-box .icon-box"));
activeClass(document.querySelectorAll(".screenshots .icons-box .icon-box"));
activeClass(document.querySelectorAll(".team .labels label"));
activeClass(document.querySelectorAll(".news .labels label"));

// Functions

function menuActive() {
  let leng = main.length;
  while (--leng && window.scrollY < main[leng].offsetTop) {}
  theLi.forEach((li) => li.classList.remove("active"));
  theLi[leng].classList.add("active");
}

function navMenu() {
  if (window.innerWidth > 992) {
    if (window.scrollY > 200) {
      navBar.style.opacity = 0;
      navBar.style.position = "fixed";
    }
    if (window.scrollY > 800) {
      navBar.style.animationName = "drop-down";
    } else {
      navBar.style.animationName = "drop-up";
      navBar.style.position = "absolute";
    }
  }
}

function increaseNumber() {
  facts.forEach((h2) => {
    let count = h2.dataset.number;
    let stop = setInterval(() => {
      h2.textContent++;
      if (h2.textContent == count) {
        h2.textContent = h2.textContent;

        clearInterval(stop);
      }
    }, 1);
  });
}

function activeClass(section) {
  section.forEach((val) => {
    val.onclick = () => {
      section.forEach((el) => {
        el.classList.remove("active");
      });
      val.classList.add("active");
    };
  });
}
