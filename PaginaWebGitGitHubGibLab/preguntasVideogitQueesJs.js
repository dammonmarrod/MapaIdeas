window.onload=function(){


descargaArchivoJson();	
descargaArchivoXML();







//Preguntas
var pregunta1=["¿Qué es git?", "Es el controlador de versiones moderno, más usado en el mundo.","Es gratuito (open Source)."];
var pregunta2=["¿Cúal es la diferencia entre git y github", "Git es un controlador de versiones; mientras que github es un servidor donde se aloja el repositorio remoto."];

var pregunta3=["¿Qué partes tiene?","Remote Repository","Working Directory","Staging Area","Local Repository"];
var pregunta4=["¿Qué es el Remote Repository? ", "Es el repositorio donde esta almacenado el proyecto"];
var preguntar5=["¿Qué es el Working Directory", "Es la copia del remove repository donde vamos a trabajar"];
var pregunta6=["¿Qué es la Staging Area","Es un archivo o index que almacena información sobre los cambios realizados y que queremos que vayan a nuestro repositorio."];
var pregunta7=["¿Qué es el Local Repository", "Es la copia del repositorio en remoto", "Solo el que la tiene, dispone de acceso a ella"];

var pregunta10=["¿Cómo clonar un repositorio?", "Mediante el comando git-clone", "Los datos de Remote Repository, son enviados a la zona del Working directory y al Local repository"];

}//fin de window.onload





function descargaArchivoJson()
	{
		// Obtener la instancia del objeto XMLHttpRequest
		if(window.XMLHttpRequest)
		{
			peticion_http = new XMLHttpRequest();
		}
		else if(window.ActiveXObject)
		{
			peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
		}
		// Preparar la funcion de respuesta
		peticion_http.onreadystatechange = muestraContenido;
		// Realizar peticion HTTP
		peticion_http.open('GET', 'JsonGit.json', true);
		peticion_http.send(null);

		function muestraContenido()
		{
			console.log("entrando MostrarContenidoJSon");
			if(peticion_http.readyState == 4)
			{
				if(peticion_http.status == 200)
				{
					var respuesta_json = peticion_http.responseText;
					var objeto_json = JSON.parse(this.responseText);

					console.log(objeto_json);
						
				}

			}
		}
}

function descargaArchivoXML()
	{
		// Obtener la instancia del objeto XMLHttpRequest
		if(window.XMLHttpRequest)
		{
			peticion_http = new XMLHttpRequest();
		}
		else if(window.ActiveXObject)
		{
			peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
		}
		// Preparar la funcion de respuesta
		peticion_http.onreadystatechange = muestraContenido;
		// Realizar peticion HTTP
		peticion_http.open('GET', 'XMLGit.xml', true);
		peticion_http.send(null);

		function muestraContenido()
		{
			console.log("entrando MostrarContenidoXML");
			if(peticion_http.readyState == 4)
			{
				if(peticion_http.status == 200)
				{
					var respuesta_xml = peticion_http.responseText;
					console.log(respuesta_xml);
						
				}

			}
		}
}
