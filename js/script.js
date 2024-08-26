let edad = parseFloat(prompt("¿Cuántos años tendrías si hubieses nacido en otro planeta del sistema solar?\nIngresa tu edad."));

while (edad === 0) {
    edad = parseFloat(prompt("Nadie tiene 0 años. Por favor, ingresa una edad válida."));
}

let operacion = prompt("Selecciona un planeta:\n1- Mercurio\n2- Venus\n3- Marte\n4- Júpiter\n5- Saturno\n6- Urano\n7- Neptuno");

function calcular(edad, añosplaneta) {
    switch (añosplaneta) {
        case "1":
            return edad / 0.24;
        case "2":
            return edad / 0.62;
        case "3":
            return edad / 1.88;
        case "4":
            return edad / 12;
        case "5":
            return edad / 29;
        case "6":
            return edad / 84;
        case "7":
            return edad / 165;
        default:
            return "Operación inválida";
    }
}

let resultado = calcular(edad, operacion);

if (isNaN(resultado)) {
    alert(resultado);
} else {
    alert("Tu edad en el planeta seleccionado sería: " + resultado + " años.");
}