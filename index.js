const red= 203;
const green =246;
const blue= 233;

const header = document.getElementById("header");
//console.log(header.innerText);

function changeColor(){
    //console.log("This is working!!")
    //console.log(window.scrollY);

    const scrollFactor = 1 + window.scrollY/400;

    const r=red/scrollFactor;
    const g=green/scrollFactor;
    const b=blue/scrollFactor;

    const updatedColor = `rgb(${r}, ${g}, ${b})`;
    header.style.backgroundColor = updatedColor;

    //console.log(r,g,b)

}

changeColor();

window.addEventListener('scroll', changeColor);

