let divimagenes = document.getElementById("imagenes") as HTMLDivElement;
let ampliacio = document.getElementById("ampliacio") as HTMLDivElement;
divimagenes.addEventListener("click", (e: Event): void => {

    if(e.srcElement.style.backgroundImage !== null){
        ampliacio.style.backgroundImage = e.style.backgroundImage;
    }
})