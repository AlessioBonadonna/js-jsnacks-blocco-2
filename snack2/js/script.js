//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
//e da queste vuole generare una falsa lista di invitati con nome e cognome.

'use strict';

let bottone=document.getElementById("btn");

bottone.addEventListener('click',creoNomi);
//funzione per creare i nomi
function creoNomi(){
    //svuota lista 
let lista=[];
document.querySelector('#nomiLista').innerHTML = '';
//array nome e cognome
let nome  =["Charles" , "Pablo" , "Jesse" , "Billy" , "Butch" , "Al"];
let cognome =["Ponzi", "Escobar", "James", "The Kid", "Cassidy", "Capone"];
//for per inventare i nomi e cognomi 
for(let i=0; i<10; i++){
    let nomeRandom= Math.floor(Math.random()*nome.length);
    let nomeValore = nome[nomeRandom];
    let cognomeRandom=Math.floor(Math.random()*cognome.length);
    let cognomeValore = cognome[cognomeRandom];
    lista.push(nomeValore +' '+cognomeValore);
    let paragrafo = document.createElement('p');
    document.querySelector('#nomiLista').append(paragrafo);
    paragrafo.innerHTML = lista[i];
} 
lista=[];
}