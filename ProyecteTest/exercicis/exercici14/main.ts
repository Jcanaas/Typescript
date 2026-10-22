let rgbcolor: [string, string, string];

const colors:NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

const botonPrefix:HTMLButtonElement  = document.querySelectorAll("button")[0];


botonPrefix.addEventListener('click', () =>{
    const rgbvalue: string = `rgb(${colors[0].value},${colors[1].value},${colors[2].value})`
});