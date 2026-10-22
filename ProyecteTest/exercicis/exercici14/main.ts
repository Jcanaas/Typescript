let rgbcolor: [string, string, string];

const colors:NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

const botonPrefix:HTMLButtonElement  = document.querySelectorAll("button")[0];
const botonRandom:HTMLButtonElement  = document.querySelectorAll("button")[1];
const res = document.getElementById("mostraColor") as HTMLPictureElement;


botonPrefix.addEventListener('click', () =>{
    let rgbcolors: [string, string, string] = [colors[0].value, colors[1].value, colors[2].value];
    const rgbvalue: string = `rgb(${rgbcolors[0]},${rgbcolors[1]},${rgbcolors[2]})`;
    console.log(rgbvalue);
    res.style.backgroundColor = rgbvalue;
    res.textContent = rgbvalue;
});
 function randomColor():string{
     return (Math.round((Math.random() * 255) + 1)).toString();
 }
botonRandom.addEventListener('click', () =>{
    const rgbvalue: string = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    console.log(rgbvalue);
    res.style.backgroundColor = rgbvalue;
    res.textContent = rgbvalue;
});