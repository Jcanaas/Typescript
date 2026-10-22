const colorselector = document.getElementById("colorselector");
const boton = document.getElementById("boton");
const cuadre = document.getElementById("cuadre");
const res = document.getElementById("res");
boton.addEventListener("click", (e) => {
    cuadre.style.backgroundColor = colorselector.value;
    res.textContent = `Color aplicat: ${colorselector.value}`;
});
export {};
//# sourceMappingURL=main.js.map