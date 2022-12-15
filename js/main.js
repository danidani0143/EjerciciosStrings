//Aquí se escribirán los ejercicios con Strings:
//en console escribir:  let nomnre="Abraham";  
//y luego nombre.charAt(0);  y saldrá la "A" . Te dará la posición en la que está la letra "A"


let nombre= "Josue Cano";
nombre = nombre.toUpperCase();
let letra="";
let contFinal=0;

for (let index = 0; index < nombre.length; index++){
console.log(nombre.charAt(index)); //Hasta aquí te dice todas las letras que tiene el nombre
    let contTemp=1;
for (let cont = index+1; cont < nombre.length; cont++){
    if(nombre.charAt(index) == nombre.charAt(cont))
    contTemp++;
}// for cont
   if (contTemp>contFinal){
    contFinal=contTemp;
    letra=nombre.charAt(index);
   }//contTemp>contFinal //cuenta la cantidad de letras que se repiten, PERO te aparece la que más se repite
}// index
console.log(letra, contFinal);


//Entrada
"Laura Aline"
"enilA aruaL"  //Así tiene que quedar, poner al revés el nombre
