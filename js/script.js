$(window).ready(function(){

	var pontos = 0;
	var erros = 0;

	$('#play').click(function(){
		$('#inicio').fadeOut();
		$('#btnMenu').fadeIn();
		$('table').fadeIn();
		$('#jogo').fadeIn();
		let largura = $('table').width();
		$('table').css('height', largura);

	});

	$('#btnMenu').click(function(){
		$('nav').fadeIn();
	});

	$('#continuar').click(function(){
		$('nav').fadeOut();
	});

	$('#reiniciar').click(function(){
		location.reload();
	})

	//======== JOGO BATALHA NAVAL ========================================

	pontos = 0;
	erros = 0;

	// Randomiza as posições de cada barquinho
	var a = (Math.floor(Math.random()*5)+1);
	var b = (Math.floor(Math.random()*5)+1);
	var c = (Math.floor(Math.random()*5)+1);
	var d = (Math.floor(Math.random()*5)+1);
	var e = (Math.floor(Math.random()*5)+1);

	//===========================================================

	// Coloca os barquinhos nas posições selecionadas, mas invisiveis.
	// Em seguida, insere um 'x' na posição do barco.

	document.getElementById('a'+a).style.backgroundImage = "url('img/barco.png')";
	document.getElementById('a'+a).innerHTML = 'x';

	document.getElementById('b'+b).style.backgroundImage = "url('img/barco.png')";
	document.getElementById('b'+b).innerHTML = 'x';

	document.getElementById('c'+c).style.backgroundImage = "url('img/barco.png')";
	document.getElementById('c'+c).innerHTML = 'x';

	document.getElementById('d'+d).style.backgroundImage = "url('img/barco.png')";
	document.getElementById('d'+d).innerHTML = 'x';

	document.getElementById('e'+e).style.backgroundImage = "url('img/barco.png')";
	document.getElementById('e'+e).innerHTML = 'x';


	//===========================================================

	// Função de clique

	$('th').click(function(){
		this.style.backgroundSize = '100%'; // Mostra o que há no bloco
		if(this.innerHTML == 'x'){ 			// Verifica se há um 'x' no bloco, e se houver
			pontos += 1; 					// Ganha 1 ponto
			$('#acertos').text(pontos); 	// Escreve a pontuação no cabeçalho
		}else{ 								// Caso não tenha um 'x'
			erros += 1; 					// Perde 1 ponto
			$('#erros').text(erros); 		// Escreve a pontuação no cabeçalho
		};

	//=============================================================

		if(pontos == 5){ // Verifica se os pontos são iguais a 5, se forem
			alert("Você Venceu"); // Avisa que você venceu
			setTimeout(function(){ // Cria uma espera de 1 segundo
				location.reload(); // Recarrega a Pagina
			},1000);
			
		}else if(erros == 10){ // Verifica se os erros são iguais a 10, se forem
			alert('Você Perdeu'); // Avisa que você perdeu
			setTimeout(function(){ // Cria um intervalo de 1 segundo
				location.reload(); // Recarrega a Pagina
			},1000);
		};
	});
});