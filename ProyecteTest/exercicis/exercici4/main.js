const text = document.getElementById("text");
const boton = document.getElementById("boton");
const res = document.getElementById("res");
boton.addEventListener("click", contar);
function contar() {
    let texto = text.value;
    let finaltext = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i - 1) === "" || texto.charAt(i - 1) === " ") {
            finaltext = finaltext + texto.charAt(i).toUpperCase();
        }
        else {
            finaltext = finaltext + texto.charAt(i).toLowerCase();
        }
    }
    res.textContent = finaltext;
}
export {};
//# sourceMappingURL=main.js.map