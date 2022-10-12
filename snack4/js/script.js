// Crea due array che hanno un numero di elementi diversi.
//  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
let a = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
let b = [0, 22, 21, 3, 13, 3, 13, 8, 4];
let alung=a.length;
let blung=b.length;
let nlung;

if(alung < blung)
{
    nlung=blung-alung;
    for(let i=0;i<=nlung;i++){
       a.push(Math.floor(Math.random()*100)); 
       console.log(a);
    }
}
    else if (alung >blung){
        nlung=alung-blung;
        for(let i = 0 ; i<=nlung;i++){
            b.push(Math.floor(Math.random()*100));
            console.log(b);
            
        }
    }else{
        console.log("gli array sono uguali ");
    }
