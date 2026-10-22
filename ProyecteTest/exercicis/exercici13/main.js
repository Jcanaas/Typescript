let veichles = [];
const inputFabricant = document.getElementById('fabricant');
const inputModel = document.getElementById('model');
const inputTemps = document.getElementById('TempsCarrega');
const selectTipus = document.getElementById('tipus');
const guardarboton = document.getElementById('guardar');
const mostrarboton = document.getElementById('mostrar');
const res = document.getElementById('res');
const tempsCarregaLabel = document.getElementById('tempsCarregaLabel');
function actualizarCampoTemps() {
    tempsCarregaLabel.style.display = selectTipus.value === 'p' ? '' : 'none';
}
selectTipus.addEventListener('change', actualizarCampoTemps);
actualizarCampoTemps();
guardarboton.addEventListener('click', () => {
    const fabricant = inputFabricant.value.trim();
    const model = inputModel.value.trim();
    if (selectTipus.value == 'b') {
        let NouVehicle = {
            fabricant,
            model,
        };
        veichles.push(NouVehicle);
    }
    else if (selectTipus.value == 'p') {
        const temps = inputTemps.valueAsNumber;
        if (isNaN(temps) || temps < 0) {
            res.innerText = "Error, el tiempo no puede ser negativo o 0";
            return;
        }
        let NouVehicle = {
            fabricant,
            model,
            TempsCarrega: temps,
        };
        veichles.push(NouVehicle);
    }
    else {
        return;
    }
    inputFabricant.value = '';
    inputModel.value = '';
    inputTemps.value = '';
});
mostrarboton.addEventListener('click', () => {
    if (veichles.length === 0) {
        res.innerText = "No hi ha vehicles desats.";
        return;
    }
    let texto = "";
    veichles.forEach(veich => {
        texto += "Model: " + veich.model + "\nFabricant: " + veich.fabricant;
        if ('TempsCarrega' in veich) {
            texto += "\nTemps de carrega: " + veich.TempsCarrega + " h";
        }
        texto += "\n\n";
    });
    res.innerText = texto;
});
export {};
//# sourceMappingURL=main.js.map