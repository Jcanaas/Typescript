const text = document.getElementById("text") as HTMLTextAreaElement;
const boton = document.getElementById("boton") as HTMLButtonElement;
const  res = document.getElementById("res") as HTMLParagraphElement;



boton.addEventListener("click",contar )

function contar() {
    let texto: string = text.value;
    let finaltext: string = "";

    for (let i = 0; i < texto.length; i++) {
        if(texto.charAt(i-1) === "" || texto.charAt(i-1) === " "){
            finaltext = finaltext + texto.charAt(i).toUpperCase();
        }else{
            finaltext = finaltext +  texto.charAt(i).toLowerCase();
        }

    }

    res.textContent = finaltext;



}