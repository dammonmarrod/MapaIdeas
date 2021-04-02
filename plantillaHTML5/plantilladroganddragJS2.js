window.onload=function(){

	//Los ponemos todos para que sean Arrastrables
	document.getElementById("contenedor1primerDiv").draggable="true";
	document.getElementById("contenedor1segundoDiv").draggable="true";
	document.getElementById("contenedor1tercerDiv").draggable="true";


	//Definimos zonas de destino de elementos arrastrables
	document.getElementById("contenedor2primerDiv").ondragover=dragover_handler;
	document.getElementById("contenedor2primerDiv").ondrop=drop_handler;






}//fin de window.onload



//para indicar que el elemento se puede soltar, a través de preventDefault.
function dragover_handler(event){
	event.preventDefault();
	event.currentTarget.style.background = "lightgoldenrodyellow";// se cambia el fondo del elemento destino para indicar al usuario la zona de arrastre
}
//La función ondrop recibe los datos del objeto arrastrado.
function drop_handler(event){
	ev.preventDefault();
}
