const colorselector = document.getElementById("colorselector") as HTMLSelectElement;
const boton = document.getElementById("boton") as HTMLButtonElement;
const cuadre = document.getElementById("cuadre") as HTMLDivElement;
const res = document.getElementById("res") as HTMLParagraphElement;

boton.addEventListener("click", (e) => {
    cuadre.style.backgroundColor = colorselector.value;
    res.textContent = `Color aplicat: ${colorselector.value}`;
})