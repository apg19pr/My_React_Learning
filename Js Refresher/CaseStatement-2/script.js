window.addEventListener("mousemove", function (details) {
  console.log(details.clientX)

  let rect = document.querySelector('#rect');
  let xMove = gsap.utils.mapRange(0, window.innerWidth, 200+rect.getBoundingClientRect().width/2 , window.innerWidth - (200+rect.getBoundingClientRect().width/2), details.clientX)

  gsap.to("#rect", {
    left: xMove + "px",
    ease: Power3
  })


})