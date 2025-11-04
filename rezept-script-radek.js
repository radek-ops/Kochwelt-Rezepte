function updateZutaten() {
    let portion = document.getElementById("portionen").value;

    if (portion >= 1 && portion <= 20) {
        let weißkohl = portion * 800;
        let karotte = portion * 1;
        let zwiebel = portion * 1;
        let zucker = portion * 65;
        let salz = portion * 0.5;
        let pfeffer = portion * 0.13;
        let pfefferShort = pfeffer.toFixed(2);
        let milch = portion * 60;
        let mayonnaise = portion * 125;
        let buttermilch = portion * 60;
        let weißweinessig = portion * 1.5;
        let zitronensaft = portion * 2.5;
        let paprikapulver = portion * 0.25;
        let senf = portion * 0.5;

        document.getElementById("Weißkohl").innerHTML = weißkohl + " g Weißkohl";
        document.getElementById("Karotte").innerHTML =
            karotte + " mittel-große Karotte(n)";
        document.getElementById("Zwiebel").innerHTML =
            zwiebel + " kleine Zwiebel(n)";
        document.getElementById("Zucker").innerHTML = zucker + " g Zucker (weiß) ";
        document.getElementById("Salz").innerHTML = salz + " TL Salz ";
        document.getElementById("Pfeffer").innerHTML =
            pfefferShort + " TL Pfeffer, schwarz ";
        document.getElementById("Milch").innerHTML = milch + " ml Milch ";
        document.getElementById("Mayonnaise").innerHTML =
            mayonnaise + " g Mayonnaise ";
        document.getElementById("Buttermilch").innerHTML =
            buttermilch + " ml Buttermilch ";
        document.getElementById("Weißweinessig").innerHTML =
            weißweinessig + " EL Weißweinessig ";
        document.getElementById("Zitronensaft").innerHTML =
            zitronensaft + " EL Zitronensaft (frisch) ";
        document.getElementById("Paprikapulver").innerHTML =
            paprikapulver + " TL Paprikapulver ";
        document.getElementById("Senf").innerHTML = senf + " TL Senf (optional) ";
    } else if (portion >= -1 || portion <= 21) {
        document.getElementById("error").innerHTML =
            "( Falsche Eingabe: Geben Sie eine Zahl zwischen 1-20 )";
    }
}

