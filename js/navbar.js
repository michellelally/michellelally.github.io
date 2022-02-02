
function openNav() {
  document.getElementById("menu").style.width = "100%";
  // let marquee = document.getElementsByClassName("marquee");
  // let navbar = document.getElementsByClassName("navbar");

  // console.log(navbar)

  // for (let i = 0; i <= marquee.length; i++) {
  //   if (marquee[i] != null) {
  //     marquee[i].style.visibility = 'hidden';
  //   }
  // }
  // navbar.style.visibility = 'hidden';
}

function closeNav() {
  console.log("closeNav")
  document.getElementById("menu").style.width = "0%";
  let marquee = document.getElementsByClassName("marquee");

  for (let i = 0; i <= marquee.length; i++){
    if (marquee[i] != null){
      marquee[i].style.visibility = 'visible';
    }
  }



}