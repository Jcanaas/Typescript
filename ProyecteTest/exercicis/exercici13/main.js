const inputFabricant = document.getElementById('fabricant');
const inputModel = document.getElementById('model');
const inputTemps = document.getElementById('TempsCarrega');
const selectTipus = document.getElementById('tipus');
const guardarboton = document.getElementById('guardar');
const mostrarboton = document.getElementById('mostrar');
const res = document.getElementById('res');
let veichles = [];
guardarboton.addEventListener('click', () => {
    if (selectTipus.value === 'b') {
        let NouVehicle = {
            fabricant: inputFabricant.value.toString(),
            model: inputModel.value,
        };
        veichles.push(NouVehicle);
    }
    else if (selectTipus.value === 'p') {
        let NouVehicle = {
            fabricant: inputFabricant.value.toString(),
            model: inputModel.value,
            TempsCarrega: inputTemps.valueAsNumber
        };
        veichles.push(NouVehicle);
    }
    else {
        console.log("Error");
        return;
    }
});
mostrarboton.addEventListener('click', () => {
    veichles.forEach(veich => {
        res.innerText = "Model: " + veich.model + "\n Fabricant: " + veich.fabricant;
    });
});
export {};
//# sourceMappingURL=main.js.map