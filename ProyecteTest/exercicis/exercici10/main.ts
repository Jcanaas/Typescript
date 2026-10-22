type bicicleta = {
    fabricant: string;
    model:string;


}

type patinet = {
    fabricant: string;
    model:string;
    TempsCarrega: number;
}

type vehicle = patinet | bicicleta;

const inputFabricant = document.getElementById('fabricant') as HTMLInputElement;
const inputModel = document.getElementById('model') as HTMLInputElement;
const inputTemps = document.getElementById('TempsCarrega') as HTMLInputElement;

const guardarboton = document.getElementById('guardar') as HTMLButtonElement;
const mostrarboton = document.getElementById('mostrar') as HTMLButtonElement;


