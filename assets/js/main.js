
var x = "X";
var o = "O";
var count = 0;
var o_win = 0;
var x_win = 0;
var matriz = [];	

var _1 = document.getElementById('0');
var _2 = document.getElementById('1');
var _3 = document.getElementById('2');
var _4 = document.getElementById('3');
var _5 = document.getElementById('4');
var _6 = document.getElementById('5');
var _7 = document.getElementById('6');
var _8 = document.getElementById('7');
var _9 = document.getElementById('8');

var boton = document.getElementsByClassName('tic');

function marcar (boton){
	if(count % 2 == 0){
		boton.value = "X";
	}
	else{
		boton.value = "O"
	}
	boton.disabled = true;
	matriz[boton.id] = boton.value;
	count++;
	if(count > 6) { evaluarGanador(matriz);  } 
	
}
 
function evaluarGanador(a,count){
	
	if((a[0] == x && a[1] == x && a[2] == x) || (a[3] == x && a[4] == x && a[5] == x) || (a[6] == x && a[7] == x && a[8] == x) ||
	   (a[0] == x && a[3] == x && a[6] == x) || (a[1] == x && a[4] == x && a[7] == x) || (a[2] == x && a[5] == x && a[8] == x) ||
	   (a[0] == x && a[4] == x && a[8] == x) || (a[2] == x && a[4] == x && a[6] == x)){
	   	alert("Player "+ document.getElementById('judador1').value + "'X' win");
	  	return 0;
	   	//newGame();
	} 
	else if((a[0] == o && a[1] == o && a[2] == o) || (a[3] == o && a[4] == o && a[5] == o) || (a[6] == o && a[7] == o && a[8] == o) ||
	   (a[0] == o && a[3] == o && a[6] == o) || (a[1] == o && a[4] == o && a[7] == o) || (a[2] == o && a[5] == o && a[8] == o) ||
	   (a[0] == o && a[4] == o && a[8] == o) || (a[2] == o && a[4] == o && a[6] == o)){
	   	alert("Player " + document.getElementById('judador2').value +" O win");
	   return 0;
	   //newGame();
	   //activarTodos(true);
	}
	else {
		alert("Empate");
	}

}

	

function inciarJuego(boton){
	if(boton.id % 2 !== 0){
		boton.value = "X";
	}
	else{
		boton.value = "O";
	}

}

function desactivarTodos(){
  for(i=1; i<=9; i++){
    document.getElementById(i).disabled = true;
  }
}


function newGame(){
	document.getElementById('1').value = '+';
	document.getElementById('2').value = '+';
	document.getElementById('3').value = '+';
	document.getElementById('4').value = '+';
	document.getElementById('5').value = '+';
	document.getElementById('6').value = '+';
	document.getElementById('7').value = '+';
	document.getElementById('8').value = '+';
	document.getElementById('9').value = '+';
}