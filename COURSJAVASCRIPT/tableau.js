let prenoms=['Pierre','Dany','fatou','khady']
let ages=[22,18,10,29]
let produits=['livre',20,'ordinateur',5,['magnets',100]]

//affichage dans le console
for (var i=0;i<prenoms.length;i++)
{
    console.log(prenoms[i]);  

}



for (var i=0;i<ages.length;i++)
{
   document.getElementById("p2").innerHTML+=ages[i]+'<br>' 

}

for (var i=0;i<produits.length;i++)
{
   document.getElementById("p3").innerHTML+=produits[i]+'<br>' 

}

//var p=prompt("Entrer votre prenom")
//prenoms.push(p);

//for (var i=0;i<prenoms.length;i++)
//{
   //document.getElementById("p1").innerHTML+=prenoms[i]+'<br>' 

//}
document.addEventListener("DOMContentLoaded", function () {
var boutonR = document.getElementById("bouton");

boutonR.addEventListener("click", f);

function f()
{
    var recup=document.getElementById("pn").value;

    prenoms.push(recup);
    //affichage dans le fichier html
for (var i=0;i<prenoms.length;i++)
{
   document.getElementById("p1").innerHTML+=prenoms[i]+'<br>' 

}
}
});