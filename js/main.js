//Aquí se escribirán los ejercicios con Strings:
//en console escribir:  let nomnre="Abraham";  
//y luego nombre.charAt(0);  y saldrá la "A" . Te dará la posición en la que está la letra "A"


// let nombre= "Josue Cano";
// nombre = nombre.toUpperCase();
// let letra="";
// let contFinal=0;

// for (let index = 0; index < nombre.length; index++){
// console.log(nombre.charAt(index)); //Hasta aquí te dice todas las letras que tiene el nombre
//     let contTemp=1;
// for (let cont = index+1; cont < nombre.length; cont++){
//     if(nombre.charAt(index) == nombre.charAt(cont))
//     contTemp++;
// }// for cont
//    if (contTemp>contFinal){
//     contFinal=contTemp;
//     letra=nombre.charAt(index);
//    }//contTemp>contFinal //cuenta la cantidad de letras que se repiten, PERO te aparece la que más se repite
// }// index
// console.log(letra, contFinal);


// //Entrada
// // "Laura Aline"
// // "enilA aruaL"  //Así tiene que quedar, poner al revés el nombre

// function reves(str){
//     let tmpStr="";
//     for(let indice =str.length-1; indice >= 0; indice--){
//         tmpStr += str.charAt(indice);
//     }//for indice //En console escribimos reves("Laura Alina");
// }//reves

// //Palíndromo:
// function esPalindromo(str){
//     str =str.toLowerCase();
//     str=str.replaceAll(" ", "");
//     if (reves(str)==str)
//         return true;
    
//     return false;
// }//esPalindromo  //escribimos en console esPalindromo("Ana")  y nos saldrá true

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("Click", function(event){
    event.preventDefault();

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    alertError.style.display="none";
    alertError.innerHTML="";
    // console.log(exampleFormControlTextarea1.value.length);
    // console.log("[" +
    // exampleFormControlTextarea1.value.replaceAll("  " , " ")
    //    + "]"
    // );
    // console.log(exampleFormControlTextarea1.value.replaceAll("  ", " ").length);
    if (exampleFormControlTextarea1.value.trim().length < 20){
       alertError.innerHTML = "El mensaje debe contener 20 caracteres o más";
       alertError.style.display="block";
       exampleFormControlTextarea1.focus();
       exampleFormControlTextarea1.select();
    }//if

if(exampleFormControlInput1.value.match(emailRegex) == null){
    alertError.style.display="block";
    alertError.innerHTML += "<br/>El correo electrónico no es válido.";
}

});