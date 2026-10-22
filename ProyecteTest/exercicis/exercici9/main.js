const boton = document.getElementById("alternate");
const div = document.getElementById("div");
const res = document.getElementById("res");
function cambiarres() {
    if (div.classList.contains("actiu")) {
        res.textContent = "actiu";
    }
    else {
        res.textContent = "inactiu";
    }
}
cambiarres();
boton.addEventListener("click", () => {
    div.classList.toggle('actiu');
    cambiarres();
});
export {};
//# sourceMappingURL=main.js.map