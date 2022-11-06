
// image1
var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1++;
randomNumber1=Math.floor(randomNumber1);
var image1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",image1);

// image2
var randomNumber2=Math.floor(Math.random()*6)+1;
var image2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",image2);

// result
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 WINS"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 WINS";
}
else{
    document.querySelector("h1").innerHTML="IT'S A DRAW!";
}