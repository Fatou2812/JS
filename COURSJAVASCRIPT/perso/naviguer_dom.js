//document.querySelector()
//Cette méthode vous permet de sélectionner le premier élément correspondant à un sélecteur CSS spécifié. 
//document.querySelectorAll()
//Si vous souhaitez sélectionner tous les éléments correspondant à un sélecteur donné, vous pouvez utiliser document.querySelectorAll() :
var p=document.querySelector(".para");

/**La propriété parentNode en JavaScript est utilisée pour accéder à l'élément parent d'un nœud dans le Document Object Model (DOM).
 *  Chaque nœud du DOM a un parent, à l'exception du nœud racine du document. */
var div=p.parentNode;
div.style.color="orange";

/**La propriété childNodes en JavaScript est utilisée pour accéder à la liste des nœuds enfants d'un élément dans le Document 
 * Object Model (DOM). Cette liste est sous la forme d'une collection de nœuds, et elle peut contenir des éléments, des commentaires,
 *  et des nœuds texte, entre autres. */
var b=document.body;
var div=b.childNodes[3];
var p1=div.childNodes[1];
var texte=p1.childNodes[0].nodeValue;
//alert(texte);

var s=document.querySelectorAll(".para")[0]
/**La propriété firstChild en JavaScript est utilisée pour accéder au premier nœud enfant d'un élément dans le Document Object Model (DOM).
 *  Ce nœud peut être n'importe quel type de nœud, y compris des éléments, des nœuds texte, des commentaires, etc. */
 var premier=s.firstChild.nodeValue;
 alert(premier);

