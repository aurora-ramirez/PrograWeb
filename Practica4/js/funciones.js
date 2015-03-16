
/*function calcula(operacion){
    		var operador1= document.calc.operador1.value;
    		var operador2= document.getElementById("operador2").value;    		
    	    var result = eval(operador1+operacion+operador2);
    		document.calc.resultado.value= result;
    	}*/

 $(document).ready(function(){

	//alert('hola :D')
	$('h1').hide('slow'); //selecciona todos los elementos h1 y los oculta
	$('h1').show('slow');
	$('h1').click(function(){
		$(this).hide('slow');
		$('#consola').html($(this).css('fontSize'));
		if($(this).css('fontSize')=='50px')
		{
			$(this).css('fontSize', '32px');
		}
		else
		{
			$(this).css('fontSize', '50px');	
		}
		
		
		$(this).show('slow');



		$('#btn2').click(function()
		{
			$('#img2').attr('src','img/2.jpeg')
		})


	});

});