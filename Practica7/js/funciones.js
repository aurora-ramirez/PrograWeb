
$(document).ready(
	function(){

		var nuevacarta;
		var cont = 1;
		var cont2 = 0;
		setInterval(
			function(){
				
				nuevacarta = 'img/l'+cont+'.jpg';
				$('#cartaMaestra').attr('src',nuevacarta);
				cont ++;

				if (cont > 54) {
					cont = 1;
				};

			},2000
		);

		$('.carta').click(
			function(){
				$(this).hide();
				cont2++;

				if(cont2==8)
				{
					alert("HAS GANADO");
				}
			}
		);

		

	}
);