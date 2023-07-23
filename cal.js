function calculer() { 
    let a = document.getElementById("output").value 
    let b = eval(a) 
    document.getElementById("output").value = b 
}
//fonction qui affiche la valeur
function afficher(val) { 
   document.getElementById("output").value+=val 
} 
//fonction qui efface l'écran 
function effacer(){ 
   document.getElementById("output").value = "" 
} 
function pm(){
   let a = document.getElementById("output").value 
  let b = eval(a) 
  document.getElementById("output").value = b*(-1)
}
function fh(){
   output.value=output.value.slice(0,-1)
}