// variabile di km-età
const chilometri = parseInt(prompt('Quanti chilometri vorresti percorrere?', 100));
const età        = parseInt(prompt('Quanti anni hai?', 100));
const prezzo      = 0.21;

console.log(chilometri, età);

let discount = 0;

// prezzo biglietto 

let prezzoBiglietto = chilometri * prezzo;
console.log(prezzoBiglietto);


const message = `
  il biglietto costa ${prezzoBiglietto - discount}€!
`
console.log(message);

document.getElementById('messageTicket').innerHTML = message;
