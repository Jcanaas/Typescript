const cuadrat = document.getElementById("cuadrat") as HTMLDivElement;
const up = document.getElementById("up") as HTMLButtonElement;
const down = document.getElementById("down") as HTMLButtonElement;
const left = document.getElementById("left") as HTMLButtonElement;
const right = document.getElementById("right") as HTMLButtonElement;
let x: number = 0;
let y: number = 0;

up.addEventListener("click", () => {if(y > 0){y = y - 10;}moure();});
down.addEventListener("click", () => {if(y < 350){y = y + 10;}moure();});
left.addEventListener("click", () => {if(x > 0){x = x - 10;}moure();});
right.addEventListener("click", () => {if(x < 350){x = x + 10;}moure();});

function moure(): void{
    cuadrat.style.transform = `translate(${x}px, ${y}px)`;
}