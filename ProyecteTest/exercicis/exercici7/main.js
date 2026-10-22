let divimagenes = document.getElementById("imagenes");
let ampliacio = document.getElementById("ampliacio");
divimagenes.addEventListener("click", (e) => {
    if (e.srcElement.style.backgroundImage !== null) {
        ampliacio.style.backgroundImage = e.style.backgroundImage;
    }
});
export {};
//# sourceMappingURL=main.js.map