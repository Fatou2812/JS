
   
document.addEventListener("DOMContentLoaded", function () {
   var boutonValider = document.getElementById("bouton");

   boutonValider.addEventListener("click", f);
   
   function f() {
       // Récupérer les valeurs des champs
       var nombre1 = parseFloat(document.getElementById("nombre1").value);
       var nombre2 = parseFloat(document.getElementById("nombre2").value);
       var operation = document.getElementById("operation").value;
   
 // Récupérer la valeur du champ "Decimal"
 var champDecimal = document.getElementById("decimal");
 var valeurDecimal = parseFloat(champDecimal.value);

 // Vérifier si la valeur est un nombre
 if (!isNaN(valeurDecimal)) {
    // Convertir la valeur en binaire et mettre à jour le champ "Binaire"
    var champBinaire = document.getElementById("binaire");
    champBinaire.value = convertirEnBinaire(valeurDecimal);}
    else {
        alert("Veuillez entrer une valeur numérique dans le champ Decimal.");}
       // Effectuer le calcul en fonction de l'opération sélectionnée
       var resultat;
   
       switch (operation) {
           case "Addition":
               resultat = nombre1 + nombre2;
               break;
           case "Soustraction":
               resultat = nombre1 - nombre2;
               break;
           case "Multiplication":
               resultat = nombre1 * nombre2;
               break;
           case "Division":
            if(nombre2==0)
            {
                alert("division par zero impossible")
            }
            else{
                resultat = nombre1 / nombre2;
            }
              
               break;
           default:
               resultat = "Opération non reconnue";
       }
   
       // Mettre à jour le champ "Résultat"
       var champResultat = document.getElementById("resultat").value = resultat;
       
   }
       
});  

// Fonction pour convertir un nombre décimal en binaire
function convertirEnBinaire(decimal) {
    return decimal.toString(2);
}

        

