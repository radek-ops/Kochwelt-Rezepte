function portionCalculation() {

    let quantity = [500, 1, 2, 2, 2, 2, 500, 150, 100];
    let sum = document.querySelectorAll('td.sum');
    let portion = document.getElementById('portion').value;
    let error = document.getElementById('error');


    if (portion <= 0 || portion >= 21) {
        error.style.color = 'red';
        return error.innerHTML = 'Fehler: Geben Sie eine Ganzzahl zwischen 1-20 ein.';
    }


    if (portion == parseInt(portion)) {
        error.innerHTML = '';
        error.style.color = '';

        for (let index = 0; index < quantity.length; index++) {
            let newCalculation = quantity[index];
            newCalculation *= portion;
            return sum[index].innerHTML = newCalculation;
        }
    } else {
        error.style.color = 'red';
        return error.innerHTML = 'Fehler: Keine Kommas oder Punkte erlaubt';
    }


}