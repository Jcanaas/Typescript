const boton = document.getElementById("boton") as HTMLInputElement;
const res = document.getElementById("res") as HTMLInputElement;
const graus  = document.getElementById("graus") as HTMLInputElement;
const tipus = document.getElementById("tipus") as HTMLInputElement;

boton.addEventListener("click",convert);


function convert(){
    if (tipus.value === "Celsius" ){
        let conversio: number = 5.00 * Number(graus.value);
        res.textContent= `Els ${Number(graus.value)}ºC equivalen a ${conversio} graus Fahrenheit`;
    }else{
        let conversio: number =  Number(graus.value) / 50.00;
        res.textContent= `Els ${Number(graus.value)} graus Fahrenheit equivalen a ${conversio}ºC ` ;
    }
}