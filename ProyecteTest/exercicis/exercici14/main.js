let rgbcolor;
const colors = document.querySelectorAll("input");
const botonPrefix = document.querySelectorAll("button")[0];
botonPrefix.addEventListener('click', () => {
    const rgbvalue = `rgb(${colors[0].value},${colors[1].value},${colors[2].value})`;
});
export {};
//# sourceMappingURL=main.js.map