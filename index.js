var randomNumber1=Math.floor((Math.random()*6)+1);
var img="dice" + randomNumber1 +".png";
var source="./images/" + img;
var i1=document.querySelectorAll("img")[0];
i1.setAttribute("src",source);

var randomNumber2=Math.floor((Math.random()*6)+1);
var img1="dice" + randomNumber2 +".png";
var source1="./images/" + img1;
var i2=document.querySelectorAll("img")[1];
i2.setAttribute("src",source1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Siva Wins";
}


else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Lakshmi Wins";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}