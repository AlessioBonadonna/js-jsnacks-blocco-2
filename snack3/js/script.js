//Crea un array di numeri interi e fai la somma di tutti gli elementi
//  che sono in posizione dispari



 

let numeri = [0, 56, 112, 168, 224, 280, 336, 392, 448, 504];
let lungArray= numeri.length;

let btn = document.getElementById("go");
btn.addEventListener('click',sommaArray);
function sommaArray(){
    let idispari=0;
    for(let i =0 ; i<lungArray ; i++){
        if(i % 2 != 0){
            idispari+=numeri[i];

        }
        console.log(idispari);
        somma.innerHTML="la somma in posizioni dispari è = "+ idispari;
    }

}