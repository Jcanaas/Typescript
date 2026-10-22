const cuadrat = document.getElementById("cuadrat");
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
let x = 0;
let y = 0;
up.addEventListener("click", () => { if (y > 0) {
    y = y - 10;
} moure(); });
down.addEventListener("click", () => { if (y < 350) {
    y = y + 10;
} moure(); });
left.addEventListener("click", () => { if (x > 0) {
    x = x - 10;
} moure(); });
right.addEventListener("click", () => { if (x < 350) {
    x = x + 10;
} moure(); });
function moure() {
    cuadrat.style.transform = `translate(${x}px, ${y}px)`;
}
export {};
//# sourceMappingURL=main.js.map