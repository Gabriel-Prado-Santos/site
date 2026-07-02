function setColor(color) {
    document.body.style.backgroundColor= color;
}

document.getElementById("redButton").addEventListener("click", function(){setColor("red")});
document.getElementById("blueButton").addEventListener("click", function(){setColor("blue")});
document.getElementById("greenButton").addEventListener("click", function(){setColor("green")});

document.getElementById("inputBox").addEventListener("keypress", function(event){
    alert("Você digitou: " + event.key);
})