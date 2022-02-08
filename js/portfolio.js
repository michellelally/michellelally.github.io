gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)");
const sections = document.querySelectorAll(".page-content__section");
const marquees = document.querySelectorAll(".marquee div");
let marqueeText = "";

const updateMarqueeText = () => {
  [...marquees].forEach((marquee) => {
    marquee.classList.add("active");
    marquee.addEventListener("transitionend", () => {
      marquee.classList.remove("active");
      marquee.innerText = `${marqueeText} 🔹 `.repeat(20);
    });
  });
};

const updateBgColor = (color) =>
  document.documentElement.style.setProperty("--color-background", color);

const setActiveSection = (section) => {
  marqueeText = section.querySelector("h2").textContent;
  [...sections].forEach((section) => section.classList.remove("active"));
  section.classList.add("active");
  !prefersReducedMotion.matches && updateBgColor(section.dataset.bgColor);
  updateMarqueeText();
};

if (!prefersReducedMotion.matches) {
  gsap.to(".marquee div", {
    scrollTrigger: {
      trigger: ".page-content",
      scrub: 0.25,
      start: "top bottom",
      end: "bottom top",
      ease: "power2"
    },
    xPercent: -50
  });
}

gsap.utils.toArray(".page-content__section h2").forEach((heading) => {
  ScrollTrigger.create({
    trigger: heading,
    start: "top center",
    end: "bottom 200px",
    toggleActions: "play reset play reset",
    ease: "power2",
    onEnter: () =>
      marqueeText !== heading.textContent &&
      setActiveSection(heading.parentElement),
    onEnterBack: () =>
      marqueeText !== heading.textContent &&
      setActiveSection(heading.parentElement)
  });
});

let logoContainer = document.querySelector('.logo-container');
let logoImg = logoContainer.querySelector('.hover-img');

document.body.onmousemove = (e) => {
  let x = e.pageX - 15;
  let y = e.pageY - 15;
  logoImg.style.top = y + 'px';
  logoImg.style.left = x + 'px';
}

logoContainer.querySelectorAll('.text').forEach(text => {
  text.onmousemove = () => {
    logoImg.src = text.getAttribute('data-src');
  }
});

// function contactBtn() {
//   console.log("contact")
//   section.classList.add("show");

// }

// function closeBtn() {
//   section.classList.remove("show");
//   textArea.value = "";
// }

const section = document.querySelector("section.profile"),
  contactBtn = section.querySelector("#contactBtn"),
  closeBtn = section.querySelector("#close"),
  textArea = section.querySelector("textarea");

contactBtn.addEventListener("click", () => {
  section.classList.add("show");
});


function close() {
  section.classList.remove("show");
  textArea.value = "";
}

console.log(closeBtn)

closeBtn.addEventListener("click", () => {
  console.log("close")
  section.classList.remove("show");
  textArea.value = "";
});

function send() {
  console.log("send")
}

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  Email.send({
    SecureToken: "63140acd-4d8e-4da6-b546-81ee0c599429",
    To: 'shelley.lally@gmail.com',
    From: 'shelley.lally@gmail.com',
    Subject: "Sending an email from your portfolio!",
    Body: message,
  })
    .then(
      alert("Message sent successfully!")
    );

    name.value = "";
    email.value = "";
    message.value = "";
}