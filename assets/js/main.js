function aparecer(){
	var contenido= document.getElementById('contenido');
	
	var boton = document.createElement('button');
	var espacio = document.createElement('input');
	document.createElement('input').value = "";
	var respuesta = document.createElement('div');


	espacio.placeholder +='Añadir una lista...'
	boton.innerHTML = 'Guardar';

	contenido.appendChild(espacio);
	contenido.appendChild(boton);
	
} 