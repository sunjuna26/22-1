let clr= document.querySelector('.clr');
let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
 let red = Math.round(Math.random() *255); //200
 let green = Math.round(Math.random() *255); //100
 let blue = Math.round(Math.random() *255); //0

  clr.style.background =`rgb(${red}, ${green}, ${blue})`

});