function kartesischZuPolar() {
    const realteil = parseFloat(document.getElementById("realteil").value);
    const imaginaerteil = parseFloat(document.getElementById("imaginaerteil").value);

    if (isNaN(realteil) || isNaN(imaginaerteil)) {
        document.getElementById("polarErgebnis").textContent = "Ungültige Eingabe";
        return;
    }

    const z = math.complex(realteil, imaginaerteil);
    const radius = math.abs(z);
    const winkelRad = math.arg(z);
    const winkelGrad = winkelRad * 180 / Math.PI;

    document.getElementById("polarErgebnis").textContent = `Radius: ${radius.toFixed(2)}, Winkel: ${winkelGrad.toFixed(2)}°`;
}

function polarZuKartesisch() {
    const radius = parseFloat(document.getElementById("radius").value);
    const winkelGrad = parseFloat(document.getElementById("winkel").value);

    if (isNaN(radius) || isNaN(winkelGrad)) {
        document.getElementById("kartesischErgebnis").textContent = "Ungültige Eingabe";
        return;
    }

    const winkelRad = winkelGrad * Math.PI / 180;
    const realteil = radius * Math.cos(winkelRad);
    const imaginaerteil = radius * Math.sin(winkelRad);

    document.getElementById("kartesischErgebnis").textContent = `Realteil: ${realteil.toFixed(2)}, Imaginärteil: ${imaginaerteil.toFixed(2)}`;
}

function addieren() {
    const realteil1 = parseFloat(document.getElementById("realteil1").value);
    const imaginaerteil1 = parseFloat(document.getElementById("imaginaerteil1").value);
    const realteil2 = parseFloat(document.getElementById("realteil2").value);
    const imaginaerteil2 = parseFloat(document.getElementById("imaginaerteil2").value);

    if (isNaN(realteil1) || isNaN(imaginaerteil1) || isNaN(realteil2) || isNaN(imaginaerteil2)) {
        document.getElementById("operationErgebnis").textContent = "Ungültige Eingabe";
        return;
    }

    const z1 = math.complex(realteil1, imaginaerteil1);
    const z2 = math.complex(realteil2, imaginaerteil2);
    const summe = math.add(z1, z2);

    document.getElementById("operationErgebnis").textContent = `Ergebnis: ${summe.re.toFixed(2)} + ${summe.im.toFixed(2)}i`;
}

function subtrahieren() {
    // Ähnlich wie addieren(), aber mit math.subtract()
}

function multiplizieren() {
    // Ähnlich wie addieren(), aber mit math.multiply()
}

function dividieren() {
    // Ähnlich wie addieren(), aber mit math.divide()
}