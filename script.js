var dato1 = document.querySelector("#dato1");
var dato2 = document.querySelector("#dato2");
var somma = document.querySelector("#somma");
somma.addEventListener("click", sommavalori);
var sottrazione = document.querySelector("#sottrazione");
sottrazione.addEventListener("click", sottrazionevalori);
var prodotto = document.querySelector("#prodotto");
prodotto.addEventListener("click", prodottovalori);
var divisione = document.querySelector("#divisione");
divisione.addEventListener("click", divisionevalori);
var risultato = document.querySelector("#risultato");
var log = document.querySelector("#log");

function sommavalori() {
    var risultato = Number(dato1.value) + Number(dato2.value);
    risultato.textContent = risultato;
    log.innerHTML += Number(dato1.value) + " + " + Number(dato2.value) + " = " + risultato;

}

function sottrazionevalori() {
    var risultato = Number(dato1.value) - Number(dato2.value);
    risultato.textContent = risultato;
    log.innerHTML += Number(dato1.value) + " - " + Number(dato2.value) + " = " + risultato;
}

function prodottovalori() {
    var risultato = Number(dato1.value) * Number(dato2.value);
    risultato.textContent = risultato;
    log.innerHTML += Number(dato1.value) + " x " + Number(dato2.value) + " = " + risultato;
}

function divisionevalori() {
    var risultato = Number(dato1.value) / Number(dato2.value);
    risultato.textContent = risultato;
    log.innerHTML += Number(dato1.value) + " : " + Number(dato2.value) + " = " + risultato;
}