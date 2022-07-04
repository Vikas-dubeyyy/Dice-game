var randomNumber1=Math.ceil(6*Math.random());
var randomNumber2=Math.ceil(6*Math.random());

var imgSource1="images/dice"+randomNumber1+".png";
var imgSource2="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",imgSource1);
document.querySelector(".img2").setAttribute("src",imgSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 Wins";
}
else{
  document.querySelector("h1").textContent="Its a Tie";
}
