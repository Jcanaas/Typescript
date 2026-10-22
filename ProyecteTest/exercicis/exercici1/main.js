const inputnumeroo = document.getElementById("inputnumero");
const boton = document.getElementById("boton");
const res = document.getElementById("res");
boton.addEventListener("click", validate);
function crearRandom() {
    return Math.round((Math.random() * 100) + 1);
}
function validate() {
    console.log("Validate: ");
    let random = crearRandom();
    let num = parseInt(inputnumeroo.value);
    if (num <= random && num > 0) {
        res.textContent = `El valor esta dins del interval ${random - num}`;
    }
    else {
        res.textContent = `El valor no esta dins del interval ${random - num}`;
    }
}
export {};
//# sourceMappingURL=main.js.map