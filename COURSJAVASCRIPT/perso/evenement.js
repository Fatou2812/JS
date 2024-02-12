//affiche un message lorsque l'utilisateur clique sur un paragraphe
// <p onclick="alert('Bravo');">Cliquez-moi,cliquez-moi!</p>  dans le fichier html
//afficher un autre texte lorqu'on sur un texte
// <p onclick="this.textContent='MERCI!'">Cliquez-moi!</p>   dans le fichier html

/*afficher un autre texte lorqu'on sur un texte
var p1=document.querySelector('p');
p1.onclick=function()
{
    this.innerHTML=" <strong> Bravo! </strong>";
    this.style.color="orange";
};   */

/*var p1=document.querySelector('p');
p1.addEventListener('click',changeTexte);  // changeTexte nom de la fonction qui va suivre
function changeTexte(){
    this.innerHTML=" <strong> Bravo! </strong>";
    this.style.color="orange";
}
*/
//mouseover evenement qui se declenche lorsqu'on survole 
var p1=document.querySelector('p');
p1.addEventListener("mouseover",Message1);
p1.addEventListener("mousedown",Message2); // mousedown  souris enfoncé
p1.addEventListener("mouseout",reset1);//L'événement mouseout en JavaScript est déclenché lorsqu'un curseur de la souris quitte la zone d'un élément ou de l'un de ses descendants. Cet événement peut être utile pour détecter lorsque le pointeur de la souris quitte une zone spécifique de la page.
p1.addEventListener("mouseup",reset2);//L'événement mouseup en JavaScript est déclenché lorsque le bouton de la souris est relâché (libéré) après avoir été enfoncé sur un élément. 

function Message1()
{
    this.innerHTML=" <strong> Bravo! </strong>";
    this.style.backgroundColor="orange";
    this.style.fontSize="24px";
}
function Message2()
{
    this.innerHTML=" <strong> Bravo! </strong>";
    this.style.backgroundColor="orange";
    this.style.color="#26C";
    this.style.fontSize="28px";
}

function reset1()
{
    this.innerHTML=" <strong> passé sur moi </strong>";
    this.style.backgroundColor="";
   
}
function reset2()
{
    this.innerHTML=" <strong> passé sur moi! </strong>";
    this.style.backgroundColor="";
    this.style.color="";
    this.style.fontSize="";
}


/**En JavaScript, la propriété event.target fait référence à l'élément 
 * sur lequel l'événement a été déclenché. Cela peut être particulièrement
 *  utile lorsque vous manipulez des événements sur plusieurs éléments, et 
 * vous souhaitez savoir sur quel élément spécifique l'événement a été déclenché. */

/**La propriété event.currentTarget en JavaScript fait référence à l'élément sur lequel
 *  le gestionnaire d'événements est actuellement attaché. Cela peut être utile lorsque 
 * vous avez des gestionnaires d'événements sur plusieurs éléments, et vous souhaitez savoir 
 * sur quel élément le gestionnaire d'événements est actuellement en train de s'exécuter. */