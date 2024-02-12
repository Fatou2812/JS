/* Ecrire un programme qui demande à l'utilisateur de donner un entier
le programme determine et affiche sa table de multiplication */
/*var a=prompt("Entrer un entier");
var element_recuperer=document.getElementById("resultat")
for(var i=1;i<=10;i++)
{
    //recupere le resultat de chaque ligne
    var result=a*i;
    element_recuperer.innerHTML+=i+"*"+a+"="+result+"<br>";
}
document.body.style.backgroundColor="violet";  */
/* Ecrire un programme qui demande à l'utilisateur de saisir son nom et son prenom
le programme determine te affiche son mail*/


// pour recuperer dans le formulaire

 /*var date=new Date();
 var annee=date.getFullYear();
 document.getElementById("prenom").style.color = "blue";
 document.getElementById("nom").style.color = "blue";

 var mail=prenom.charAt(0)+nom+annee+"@supinfo.com"
 
 document.getElementById("email").value=mail;
 document.getElementById("bouton").onclick = f;
 
 document.body.style.backgroundColor="white";
 //recuperation
 //recuperation_prenom.innerHTML+=+prenom;
 //recuperation_prenom.innerHTML+=+nom;
 //recuperation_mail.innerHTML+=+mail;
 */
 function rendreLabelsMajuscules() {
    var labels = document.querySelectorAll('label');
    labels.forEach(label=>{
        label.textContent = label.textContent.toUpperCase();
    });

}


 function genererMail() {

    rendreLabelsMajuscules();
    
    var nom = document.getElementById("nom").value.toUpperCase();
    var prenom = document.getElementById("prenom").value.toUpperCase();
    var anneeActuelle = new Date().getFullYear();
    var mail =  prenom.charAt(0) + nom + anneeActuelle + "@supinfo.com";
    
    document.getElementById("email").value = mail;

    for (var i = 1; i <=3; i++) {
        document.getElementById("L"+i).style.color = "blue";
    }
    
   
   
}
