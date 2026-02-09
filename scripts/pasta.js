function portionCalculation() {

    let quantity = [480, 200, 4, 80, 80,];
    let portion = document.getElementById('portion').value;
    let sum = document.querySelectorAll('td.sum');
    sum.innerHTML = '';


    if (portion <= 0 || portion >= 21) {

        let error = document.getElementById('error');
        error.style.color = 'red';
        return error.innerHTML = 'Fehler: Geben Sie eine Ganzzahl zwischen 1-20 ein.';
    }


    if (portion == parseInt(portion)) {
        error.innerHTML = '';
        error.style.color = '';

        for (let index = 0; index < quantity.length; index++) {
            let element = quantity[index];
            let newCalculation = element * parseInt(portion);
            sum[index].innerHTML = newCalculation;

        }
    }

    else {
        let error = document.getElementById('error');
        error.style.color = 'red';
        return error.innerHTML = 'Fehler: Keine Kommas oder Punkte erlaubt';
    }

}


