window.onload=function(){


	document.getElementById("gamificacion").onclick=paginaGamificacion;



	document.getElementById("reproducir").onclick=reproducir;
	document.getElementById("pausar").onclick=pause;
	document.getElementById("subirVolumen").onclick=volumeSubir;
	document.getElementById("bajarVolumen").onclick=volumeBajarr;



}//fin de window.onload

function paginaGamificacion(){
	window.open("todoCompleto2.html","","");
}

function reproducir(){
	//document.getElementById("reproducir").play();
	console.log("entrando")
}

function pause(){
	pause();
}

function volumeSubir(){
	volume+=0.1;
}

function volumeBajarr(){
	volume -=0.1;
}
