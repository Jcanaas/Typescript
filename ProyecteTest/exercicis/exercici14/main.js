let rgbcolor;
const colors = document.querySelectorAll("input");
const botonPrefix = document.querySelectorAll("button")[0];
const botonRandom = document.querySelectorAll("button")[1];
const res = document.getElementById("mostraColor");
botonPrefix.addEventListener('click', () => {
    let rgbcolors = [colors[0].value, colors[1].value, colors[2].value];
    const rgbvalue = `rgb(${rgbcolors[0]},${rgbcolors[1]},${rgbcolors[2]})`;
    console.log(rgbvalue);
    res.style.backgroundColor = rgbvalue;
    res.textContent = rgbvalue;
});
function randomColor() {
    return (Math.round((Math.random() * 255) + 1)).toString();
}
botonRandom.addEventListener('click', () => {
    const rgbvalue = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    console.log(rgbvalue);
    res.style.backgroundColor = rgbvalue;
    res.textContent = rgbvalue;
});
export {};
//# sourceMappingURL=main.js.map