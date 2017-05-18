var mostrarDatos = function(){
	this.childNodes.innerHTML = "";
}
//en construccion



function aparecer(){
	var contenido= document.getElementById('contenido');
	var boton = document.createElement('button');
	var botonSalida = document.createElement('button');
	var respuesta = document.createElement('div');
	
	var espacio = document.createElement('input');//.value;
	document.createElement('input').value = "";
	var datos = document.createTextNode(espacio);

	boton.innerHTML = 'Guardar';
	botonSalida.innerHTML += '<i class="fa fa-times" aria-hidden="true"></i>';
	espacio.placeholder +='Añadir una lista...'
	

	contenido.appendChild(respuesta);
	respuesta.appendChild(espacio);
	respuesta.appendChild(boton);
	respuesta.appendChild(botonSalida);
	
	espacio.appendChild(datos);

	espacio.addEventListener('click', mostrarDatos);
} 