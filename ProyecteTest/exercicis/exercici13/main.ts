type bicicleta = {
    fabricant: string;
    model: string;
}

type patinet = {
    fabricant: string;
    model: string;
    TempsCarrega: number;
}

type vehicle = patinet | bicicleta;
let veichles: vehicle[] = [];
const inputFabricant = document.getElementById('fabricant') as HTMLInputElement;
const inputModel = document.getElementById('model') as HTMLInputElement;
const inputTemps = document.getElementById('TempsCarrega') as HTMLInputElement;
const selectTipus = document.getElementById('tipus') as HTMLSelectElement;

const guardarboton = document.getElementById('guardar') as HTMLButtonElement;
const mostrarboton = document.getElementById('mostrar') as HTMLButtonElement;

const res = document.getElementById('res') as HTMLParagraphElement;
const tempsCarregaLabel = document.getElementById('tempsCarregaLabel') as HTMLLabelElement;

function actualizarCampoTemps(): void {
    tempsCarregaLabel.style.display = selectTipus.value === 'p' ? '' : 'none';
}
selectTipus.addEventListener('change', actualizarCampoTemps);
actualizarCampoTemps();

guardarboton.addEventListener('click', () => {
    const fabricant = inputFabricant.value.trim();
    const model = inputModel.value.trim();



    if (selectTipus.value == 'b') {
        let NouVehicle: bicicleta = {
            fabricant,
            model,
        }
        veichles.push(NouVehicle);
    } else if (selectTipus.value == 'p') {
        const temps = inputTemps.valueAsNumber;
        if (isNaN(temps) || temps < 0) {
            res.innerText = "Error, el tiempo no puede ser negativo o 0";
            return;
        }
        let NouVehicle: patinet = {
            fabricant,
            model,
            TempsCarrega: temps,
        }
        veichles.push(NouVehicle);
    } else {

        return;
    }

    inputFabricant.value = '';
    inputModel.value = '';
    inputTemps.value = '';
})

mostrarboton.addEventListener('click', () => {
    if (veichles.length === 0) {
        res.innerText = "No vehicles";
        return;
    }


    let texto = "";
    veichles.forEach(veich => {
        texto += "Model: " + veich.model + "\nFabricant: " + veich.fabricant;
        if ('TempsCarrega' in veich) {
            texto += "\nTemps de carrega: " + veich.TempsCarrega + " h";}
        texto += "\n\n";
    });
    res.innerText = texto;
})
