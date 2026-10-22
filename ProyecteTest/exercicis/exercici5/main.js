const text = document.getElementById("text");
const boton = document.getElementById("boton");
const long = document.getElementById("long");
const more10 = document.getElementById("more10");
const upper = document.getElementById("upper");
boton.addEventListener("click", tratar);
function tratar() {
    let str = text.value;
    const dades = [str.length, str.toUpperCase(), (str.length >= 10)];
    long.textContent = dades[0].toString();
    more10.textContent = dades[2].toString();
    upper.textContent = dades[1].toString();
}
export {};
//# sourceMappingURL=main.js.map