


function portionCalculation() {

    let quantity = [800, 1, 1, 65, 0.5, 0.13, 60, 125, 60, 1.5, 2.5, 0.25, 0.5];
    let portion = document.getElementById('portion').value;
    let sum = document.querySelectorAll('td.sum');
    sum.innerHTML = '';


    if (portion <= 0 || portion >= 21) {
        s
        let error = document.getElementById('error');
        error.style.color = 'red';
        return error.innerHTML = 'Fehler: Geben Sie eine Ganzzahl zwischen 1-20 ein.';
    }


    if (portion == parseInt(portion)) {
        portion.innerHTML = '';
        error.innerHTML = '';
        error.style.color = '';

        for (let index = 0; index < quantity.length; index++) {
            let element = quantity[index];
            let newCalculation = element * parseInt(portion);
            sum[index].innerHTML = newCalculation;
            console.log(sum);

        }
    }


    else {
        let error = document.getElementById('error');
        error.style.color = 'red';
        return error.innerHTML = 'Fehler: Keine Kommas oder Punkte erlaubt';
    }

}




















