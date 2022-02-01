  
  let logoContainer = document.querySelector('.logo-container');
  let logoImg = logoContainer.querySelector('.hover-img');

  document.body.onmousemove = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    logoImg.style.top = y + 'px';
    logoImg.style.left = x + 'px';
  }

  logoContainer.querySelectorAll('.text').forEach(text => {
    text.onmousemove = () => {
      logoImg.src = text.getAttribute('data-src');
    }
  });