/*Crear un documento HTML, este contendrá un titulo que diga Hola nombre, y un botón que diga cambiar nombre. Cuando el botón se presione aparecerá un promt en donde el usuario puede colocar su nombre, después el titulo cambiara a Hola + nombre del usuario.*/

let title = document.getElementById('title');
function getName (){
  
let nombre = prompt ("Introduce tu nombre")
title.textContent = 'Hola, ' + nombre;


}


