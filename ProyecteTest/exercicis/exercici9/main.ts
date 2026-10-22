const boton = document.getElementById("alternate") as HTMLButtonElement;
const div = document.getElementById("div") as HTMLDivElement;
const res = document.getElementById("res") as HTMLDivElement;
function cambiarres():void{
    if(div.classList.contains("actiu")){
        res.textContent = "actiu";
    }else{
        res.textContent = "inactiu";
    }
}
cambiarres();

boton.addEventListener("click", () =>{
    div.classList.toggle('actiu');
    cambiarres();
})