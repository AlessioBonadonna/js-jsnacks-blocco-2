// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.
let n = document.getElementById("text").value;
let btn = document.getElementById("go");
btn.addEventListener('click',modulo2,);

function modulo2 (){
    let n = document.getElementById("text").value;
    if (isNaN(n)) {
        error.innerHTML =" Non hai inserito un numero la pagina si ricaricherà tra 5 secondi ";
        setTimeout(function() {
            window.location.reload()
          }, 5000);
          pari.style.display("none");

    } 
    if(n % 2 == 0){
        pari.innerHTML= n;
    }else{
        n++;
        pari.innerHTML=n;
    }

}