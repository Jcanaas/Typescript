const text = document.getElementById("text") as HTMLTextAreaElement;
const boton = document.getElementById("boton") as HTMLButtonElement;
const long  = document.getElementById("long") as HTMLParagraphElement;
const more10  = document.getElementById("more10") as HTMLParagraphElement;
const upper  = document.getElementById("upper") as HTMLParagraphElement;
boton.addEventListener("click",tratar );



function tratar(){
    let str: string =text.value;
    const dades: [number, string, boolean] = [str.length,str.toUpperCase(),(str.length >=10)]

    long.textContent = dades[0].toString();
    more10.textContent = dades[2].toString();
    upper.textContent = dades[1].toString();





}