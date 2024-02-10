const form = document.querySelector('.form');
const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const value = document.querySelector('.value');
const description = document.querySelector('.description');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weightValue = weight.value;
    const heightValue = height.value;

    const bmi = (weightValue / (heightValue * heightValue)).toFixed(2); 

    let descriptionBMI = '';

    document.querySelector('.infos').classList.remove('hidden');

    if (bmi < 18.5) {
        descriptionBMI = 'Você abaixo do peso ideal.'
    } else if (bmi >= 18.5 && bmi <= 25) {
        descriptionBMI = 'Você está no peso ideal!'
    } else if (bmi > 25 && bmi <= 30) {
        descriptionBMI = 'Você está com sobrepeso.'
    } else if (bmi > 30 && bmi <= 35) {
        descriptionBMI = 'Você está com obesidade moderada.'
    } else if (bmi > 35 && bmi <= 40) {
        descriptionBMI = 'Você está com obesidade severa.'
    } else {
        descriptionBMI = 'Você está com obesidade mórbida.'
    }

    value.textContent = bmi.replace('.', ',');
    description.textContent = descriptionBMI;
});