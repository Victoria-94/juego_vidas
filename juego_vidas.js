'use strict'
function Juego (apodo,numVidas,valCartas){ 
   this.apodo=apodo;
    this.numVidas= numVidas;
   this.valCartas=valCartas;
   this.shownumvidas = function(){
    this.numVidas= numVidas-1;
    alert("Usted tiene: " + this.numVidas+ " vidas");  
    } 

    this.updatenewVidas = function(){
     
        alert("Su apodo es: " +this.apodo+ " y tiene: "+ this.numVidas + " vidas.");}
}
let jug1= new Juego("Player1", 3 , 10); 

jug1.updatenewVidas(); 
jug1.shownumvidas();
