var preguntas = []; 
var respuestas = [];
var cont = 0;

window.onload=function()
{
	document.getElementById("anterior").onclick = cambiarPregunta;
	document.getElementById("siguiente").onclick = cambiarPregunta;
	document.getElementById("respuesta").onclick = mostrarRespuesta;

	descargaArchivoXML();

	document.getElementById("anterior").disabled = true;

	parrafos = document.getElementsByTagName("p");

}

function cambiarPregunta()
{
	
	id = this.getAttribute("id");
	
	if(id == "anterior")
	{
		cont--;
		parrafos[0].textContent = preguntas[cont];	
	}
	else if(id == "siguiente")
	{
		cont++;
		parrafos[0].textContent = preguntas[cont];
		
	}

	document.getElementById("siguiente").disabled = false;
	document.getElementById("anterior").disabled = false;

	if(cont == 0)
	{
		document.getElementById("anterior").disabled = true;
	}

	if(cont == preguntas.length - 1)
	{
		document.getElementById("siguiente").disabled = true;
	}
}

function mostrarRespuesta()
{
	parrafos[0].textContent = respuestas[cont];
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
			peticion_http.open('GET', 'xmlGitGithubGitLab.xml', true);
			peticion_http.send(null);

			function muestraContenido()
			{
				if(peticion_http.readyState == 4)
				{
					if(peticion_http.status == 200)
					{
						
						var documentoXML = peticion_http.responseXML;
						var root = documentoXML.getElementsByTagName("recursosGitGithubGitLab")[0];
						var introduccion = root.getElementsByTagName("introduccionGit")[0];
						var youtube = introduccion.getElementsByTagName("youtubeGitGithubGitLab")[0];
						//alert(youtube.textContent);

						nombre = youtube.getElementsByTagName("nombre")[0];
						autor =  youtube.getElementsByTagName("autor")[0];
						titulo = youtube.getElementsByTagName("titulo")[0];
						url =  youtube.getElementsByTagName("url")[0];
						//alert(url.textContent);

						//var preguntasXML = titulo[i].getElementsByTagName("Preguntas");
						var pregunta = youtube.getElementsByTagName("Pregunta"); //preguntas dentro de la etiqueta "Preguntas"

						//alert(pregunta[0].textContent);
						for (var j = 0; j < pregunta.length; j++)
						{
							preguntas[j] = pregunta[j].textContent;
						}

						//alert(preguntas);

						//var respuestasXML = titulo[i].getElementsByTagName("Respuestas");
						var respuesta = youtube.getElementsByTagName("Respuesta"); //respuestas dentro de la etiqueta "Respuestas"

						for (var j = 0; j < respuesta.length; j++)
						{
							respuestas[j] = respuesta[j].textContent;
						}

						parrafoPregunta = document.createElement("p");
						contenido = document.createTextNode(preguntas[0]);
						parrafoPregunta.appendChild(contenido);
						document.getElementById("cajaPreguntas").appendChild(parrafoPregunta);	

					}

				}
			}
}
