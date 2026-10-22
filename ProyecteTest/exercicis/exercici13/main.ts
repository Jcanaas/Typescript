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
const selectTipus = document.getElementById('tipus') as HTMLSelectElement;

const guardarboton = document.getElementById('guardar') as HTMLButtonElement;
const mostrarboton = document.getElementById('mostrar') as HTMLButtonElement;

const res = document.getElementById('res') as HTMLParagraphElement;


let veichles: vehicle[] = [];
guardarboton.addEventListener('click', () => {
    if(selectTipus.value === 'b') {
        let NouVehicle: bicicleta = {
            fabricant: inputFabricant.value.toString(),
            model: inputModel.value,

        }
        veichles.push(NouVehicle);
    }else if(selectTipus.value === 'p'){
        let NouVehicle: patinet = {
            fabricant: inputFabricant.value.toString(),
            model: inputModel.value,
            TempsCarrega: inputTemps.valueAsNumber

        }
        veichles.push(NouVehicle);
    }else {
        console.log("Error");
        return;
    }


})

mostrarboton.addEventListener('click', () => {
 veichles.forEach(veich => {
     res.innerText= "Model: "+ veich.model + "\n Fabricant: " + veich.fabricant;
 })
})
