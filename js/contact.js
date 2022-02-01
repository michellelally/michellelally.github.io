// const section = document.getElementsByClassName("section"),
// contactBtn = section.querySelector("#contact"),
// closeBtn = section.querySelectorAll("#close"),
// textArea = section.querySelector("textarea");

let contactBtn = document.getElementById("#contact"),
closeBtn = document.getElementById("#close"),
textAre = document.getElementById("#message");

// console.log(section)

console.log(contactBtn)

contactBtn.addEventListener("click" , () =>{
  section.classList.add("show");
});

closeBtn.forEach(cBtn => {
  cBtn.addEventListener("click" , ()=>{
      section.classList.remove("show");
      textArea.value = "";
  });
});