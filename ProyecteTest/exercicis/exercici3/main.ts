const text = document.getElementById("text") as HTMLTextAreaElement;
const boton = document.getElementById("boton") as HTMLButtonElement;
const res_espais = document.getElementById("res_espais") as HTMLParagraphElement;
const res_comes = document.getElementById("res_comes") as HTMLParagraphElement;
const res_punts = document.getElementById("res_punts") as HTMLParagraphElement;

let contpunts: number = 0;
let contcomes: number = 0;
let contespais: number = 0;


boton.addEventListener("click",contar )

function contar() {
    let texto: string = text.value;
    for (let i = 0; i < texto.length; i++) {

        if(texto.charAt(i) === "."){
            contpunts++;
        }
        if(texto.charAt(i) === " "){
            contespais++;
        }
        if(texto.charAt(i) === ","){
            contcomes++;
        }
    }

    res_espais.textContent = contespais.toString();
    res_punts.textContent = contpunts.toString();
    res_comes.textContent = contcomes.toString();

}