// alert nous permet d'afficher des messages d'avertissement ou afficher des donnees 
// confirm affiche des boites de lettres avec des boutons de confirmations oui ou non
// console.log permet d'afficher des informations au niveau du console
//prompt vous permet de saisir des donnees au niveau du console
//var permet de declarer des variables locales
//let vous permet de declarer des variables gloabales
/*
var prenom="Fatou";
var nom="Camara" ;
var age=22;
console.log("le type de prenom est: "+typeof(prenom))
console.log("le type de nom est: "+typeof(nom))
console.log("le type de age est: "+typeof(age))
console.log("le type de verification est: "+typeof(verification))
a=prompt("saisir votre nom")
b=prompt("saisir votre prenom")
c=prompt("saisir votre age")
 var verification=confirm("Voule vous afficher les donnees")
if(verification==true)
    {
        alert(a+" "+" "+b+" "+c)   
    }
else
    {
        alert("Au revoir")
    }

    Ecrire un programme qui demande a l'utilisateur de saisir 2 entiers et 
    de donner l'operaeur de calcul 
    le programme determine et affiche le resultat dans le console et dans 
    l'alerte
    */
    /*
   var a=parseInt(prompt("sasir valeur 1"));
   var b=parseInt(prompt("saisir valeur 2"));
   var op=prompt("saisir l'operateur")
   
   switch(op){
        case "+":
            alert("Resultat= "+(a+b))
        break;
        case "-":
            alert("Resultat= "+(a-b))
        break;
        case "*":
            alert("Resultat= "+(a*b))
        break;
        case "/":
            alert("Cas:")
            if(b==0)
                {
                    alert("Impossible la division par 0")
                } 
            else{
                    alert("Resultat= "+(a/b))
                }
        break;
        default:
            alert("Invalide")
   }
   */
   /*Ecrire un programme qui demande de saisir deux entiers
le programme qui demande a l'utilisateur de saisir un jour de la semaine 
utilisez switch pour afficher un message approprié , considerez les differentes variations de cach majuscule
et minuscule pour assurer une correspondance correcte 
- si l'utilisateur entre lundi vous affichez c'est le premier jour de la semaine
- si l'utilisateur donne vendredi vous afficher c'est bientot le weekend avant mettre milieu de semaine
et samedi et dimanche c'est le weekend
 */
var semaine=prompt("Entrer un jour de la semaine").toLowerCase(semaine)
   switch(semaine)
   {
    case "lundi":
        alert("C'est le premier jour de la semaine ")
        break;
    case "mardi":
        alert("C'est le milieu de la semaine ")
        break;
    case "mercedi":
        alert("C'est le milieu de la semaine ")
        break;
    case "jeudi":
        alert("C'est le milieu de la semaine ")
        break; 
    case "vendredi":
        alert("C'est bientot le week-end ")
        break;
    case "samedi":
        alert("C'est le week-end ")
        break;
    case "dimanche":
        alert("C'est le week-end ")
        break;    
            
    default:
        alert("invalide")

   }

    