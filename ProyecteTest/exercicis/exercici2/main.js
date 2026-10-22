const boton = document.getElementById("boton");
const res = document.getElementById("res");
const graus = document.getElementById("graus");
const tipus = document.getElementById("tipus");
boton.addEventListener("click", convert);
function convert() {
    if (tipus.value === "Celsius") {
        let conversio = 5.00 * Number(graus.value);
        res.textContent = `Els ${Number(graus.value)}ºC equivalen a ${conversio} graus Fahrenheit`;
    }
    else {
        let conversio = Number(graus.value) / 50.00;
        res.textContent = `Els ${Number(graus.value)} graus Fahrenheit equivalen a ${conversio}ºC `;
    }
}
export {};
//# sourceMappingURL=main.js.map