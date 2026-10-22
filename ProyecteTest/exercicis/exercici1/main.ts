

const inputnumeroo= document.getElementById("inputnumero") as HTMLInputElement;
const boton= document.getElementById("boton") as HTMLInputElement;
const res = document.getElementById("res") as HTMLInputElement;


boton.addEventListener("click",validate);


function crearRandom ():  number{
    return Math.round((Math.random() * 100) + 1);

}

function validate(): void{
    console.log("Validate: ")
    let random = crearRandom();
    let num: number = parseInt(inputnumeroo.value);
    if(num <= random && num > 0){
        res.textContent = `El valor esta dins del interval ${random - num}`;
    }else{
        res.textContent = `El valor no esta dins del interval ${random - num}`;
    }


}