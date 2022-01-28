const section = document.querySelector("section"),
    hireBtn = document.querySelector(".profile .button"),
cancelBtn = document.querySelectorAll("#close");


window.addEventListener('load', (event) => {
    section.classList.add("active");

});

// hireBtn.addEventListener("load", () => {
//     section.classList.add("active");
// })
cancelBtn.forEach(cBtn => {
    cBtn.addEventListener("click", () => {
        section.classList.remove("active");
    })
});
console.log(cancelBtn);