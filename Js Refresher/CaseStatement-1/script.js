let rect = document.querySelector('#center');

rect.addEventListener("mousemove", (details) => { // check mouse hover on div and move effect
  // details is var any name can be used as var
  let rectLocation = rect.getBoundingClientRect();
  let mouseInRectPositionX = details.clientX - rectLocation.left;
  // console.log(rectLocation)
  // console.log(details)
  // console.log("details.clientX:- " + details.clientX)
  // console.log("mouse postion in rect:- " + (details.clientX - rectLocation.left))
  console.log("mouseInRectPositionX:- " + mouseInRectPositionX)
  // console.log("details.clientY:- " + details.clientY)

  if (mouseInRectPositionX < rectLocation.width / 2) {
    console.log("rectLeftSide")
    let redColor = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, mouseInRectPositionX);
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    })
    console.log(redColor)

  } else {
    console.log("rectRightSide")
    let blueColor = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, mouseInRectPositionX);
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    })
    console.log(blueColor)
  }

})


rect.addEventListener("mouseleave", () => { // check mouse hover on div and move effect
  // rect.style.backgroundColor = "#ffffff"
  gsap.to(rect, {
    backgroundColor: "#ffffff",
  })
})

// console.log(gsap.utils.mapRange(0, 250, 255, 0, 23 ))