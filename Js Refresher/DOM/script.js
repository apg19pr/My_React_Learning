let h1 = document.querySelector('h1');
// let h1ByID = document.querySelector('#h1');
// let h1ByClass = document.querySelector('.h1');



console.log(h1);
h1.innerHTML = "Changed by .innerHTML";
h1.style.color = "Blue";
h1.style.background = "rgb(0,0,0,.24)";

document.querySelector('#btn').addEventListener("click", () => {
  h1.innerHTML = "Changed by addEventListener btn"
})

let body = document.getElementsByTagName("body");
console.log(body)
let bulb = document.querySelector('#bulb')
// bulb.addEventListener("click", () => {
//   console.log(bulb)
//   bulb.classList.toggle("bulbOn")
// })

let flag = 0;

bulb.addEventListener("click", () => {
  if (flag == 0) {
    console.log(bulb)
    bulb.classList.add("bulbOn")
    flag = 1;

    body[0].style.backgroundColor = "#000"
    body[0].style.color = "#fff"
    body[0].style.transition = " all 0.3s ease-in-out"


  } else {
    bulb.classList.remove("bulbOn")
    flag = 0;

    body[0].style.color = "#000"
    body[0].style.backgroundColor = "#fff"
    body[0].style.transition = " all 0.3s ease-in-out"
  }
})


let li = document.querySelectorAll('li');
console.log(li);
li.forEach((i)=>{
console.log(i);

})



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();