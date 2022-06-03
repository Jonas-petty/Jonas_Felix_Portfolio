
window.onload = function() {
	increaseDecreaseFont();
}

var data = new Date()

function increaseDecreaseFont() {
	var elementBody = document.querySelector('html');
	var elementBtnIncreaseFont = document.getElementById('increase-font');
	var elementBtnDecreaseFont = document.getElementById('decrease-font');
	var cookieFontSize = getCookie('font-size');

	// Defini o valor do fontSize, caso não exista o cookie, será atribuído 100%
	if (cookieFontSize != '') {
		var fontSize = parseInt(cookieFontSize);
		elementBody.style.fontSize = fontSize + '%';
	} else {
		var fontSize = 100;
	}

	// Valor de incremento ou decremento, equivale a 10% do valor do Body
	var increaseDecrease = 10;

	// Evento de click para aumentar a fonte
	elementBtnIncreaseFont.addEventListener('click', function(event) {
		fontSize = fontSize + increaseDecrease;
		elementBody.style.fontSize = fontSize + '%';
		
		setCookie('font-size', fontSize);
	});

	// Evento de click para diminuir a fonte
	elementBtnDecreaseFont.addEventListener('click', function(event) {
		fontSize = fontSize - increaseDecrease;
		elementBody.style.fontSize = fontSize + '%';
		
		setCookie('font-size', fontSize);
	});
}

// Função de cor para contraste

// Troca o padrão de cor ao apertar o botão
function changeColor() {
	if (sessionStorage.getItem("estado")=="escuro") {
		claro()
	} else {
		escuro()
	}
}

// Modifica para a versão escura
function escuro() {
	console.log("escuro..")
	var element = document.body
	element.classList.add("dark_mode")
	sessionStorage.setItem("estado", "escuro")
}

// Modifica para a versão clara
function claro() {
	console.log("claro..")
	var element = document.body
	element.classList.remove("dark_mode")
	sessionStorage.setItem("estado", "claro")
}

// Verifica qual padrão usar ao carregar a página
function verificaEstado() {
	console.log("VErificando..")
	if (sessionStorage.getItem("estado")=="escuro") {
		escuro()
	} else {
		claro()
	}
}

// Data Atual no sistema

function dataAtual() {
	document.getElementById("dataAtual").innerHTML = data.toLocaleDateString()
}

// Recolhe o valor dos assentos
/*
var res = document.getElementById("resultado")

const onClick = function() {
	console.log(this.id)
	sessionStorage.setItem("assento", this.id)
}

    document.getElementById("A1").onclick = onClick
    document.getElementById("A2").onclick = onClick
    document.getElementById("A3").onclick = onClick
	document.getElementById("A6").onclick = onClick
    document.getElementById("A10").onclick = onClick

    document.getElementById("B1").onclick = onClick
	document.getElementById("B2").onclick = onClick
	document.getElementById("B3").onclick = onClick
	document.getElementById("B4").onclick = onClick
	document.getElementById("B9").onclick = onClick

	document.getElementById("C1").onclick = onClick
	document.getElementById("C2").onclick = onClick
	document.getElementById("C3").onclick = onClick
	document.getElementById("C6").onclick = onClick

	document.getElementById("D1").onclick = onClick
	document.getElementById("D2").onclick = onClick
	document.getElementById("D3").onclick = onClick

	document.getElementById("E1").onclick = onClick
	document.getElementById("E2").onclick = onClick
	document.getElementById("E3").onclick = onClick

	document.getElementById("F1").onclick = onClick
	document.getElementById("F2").onclick = onClick
	document.getElementById("F3").onclick = onClick

*/
// Inicia o sistema

function iniciadora() {
	verificaEstado()
	dataAtual()
}

document.addEventListener("DOMContentLoaded", iniciadora, false)