alert("working")

let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;

var imageSrc = "images/dice"+num1+".png";
document.querySelector(".img1").setAttribute("src", imageSrc);

imageSrc = "images/dice"+num2+".png";
document.querySelector(".img2").setAttribute("src", imageSrc);


if (num1>num2){
    document.querySelector("h1").textContent = "Player 1 Won";
}
else {
    document.querySelector("h1").textContent = "Player 2 Won";
}
