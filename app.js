// document.onkeypress =
// 
// 
// function move2em() {
//   var move = document.getElementById("car1").style.margin += 10
// }
console.log('hello')

// document.addEventListener('keydown', function(event){
//     alert(event.key)
// }
// document.animationend() {
//   window.alert( "Red Won!" );
// }
var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");

var carPosition = car1.style.left = 0 + "px";
var carPosition = car2.style.left = 0 + "px";

function move(car) {
  var moveCar = car.style.left += 10;
  return moveCar + "px";
};
document.addEventListener('keypress', function (event) {
  var keyCode = event.key;
  if (keyCode === 'z') {
    console.log(keyCode);
    move(car1)
  }
  else if (keyCode === 'm'){
    console.log(keyCode);
    move(car2);
  }
});

