const text = document.getElementById("text");
const boton = document.getElementById("boton");
const res_espais = document.getElementById("res_espais");
const res_comes = document.getElementById("res_comes");
const res_punts = document.getElementById("res_punts");
let contpunts = 0;
let contcomes = 0;
let contespais = 0;
boton.addEventListener("click", contar);
function contar() {
    let texto = text.value;
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === ".") {
            contpunts++;
        }
        if (texto.charAt(i) === " ") {
            contespais++;
        }
        if (texto.charAt(i) === ",") {
            contcomes++;
        }
    }
    res_espais.textContent = contespais.toString();
    res_punts.textContent = contpunts.toString();
    res_comes.textContent = contcomes.toString();
}
export {};
//# sourceMappingURL=main.js.map