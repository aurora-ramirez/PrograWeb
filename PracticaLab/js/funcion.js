

 function calcula(operacion){
    		var prestamo= document.getElementById("monto").value;   
    		var meses= document.getElementById("meses").value;     		
    	    var interes;
    	    var total;
    	    var subtotal;
    	    var pagomes;
    		if(meses>0 && meses<=3)
    		{
    			interes=0.1;
    			subtotal=prestamo*interes;
    			total= eval(subtotal+operacion+prestamo);
    			pagomes=total/meses;
    			
    		}
    		if(meses>=4 && meses<=7)
    		{
    				interes=0.2;
    				subtotal=prestamo*interes;
    				total= eval(subtotal+operacion+prestamo);
    				pagomes=total/meses;
    			
    		}

    	    if(meses>=8)
    		{
    				interes=0.3;
    				subtotal=prestamo*interes;
    				total= eval(subtotal+operacion+prestamo);
    				pagomes=total/meses;
    			
    				
    		}
  
		
    		document.calc.total.value= total;
    		document.calc.pago.value= pagomes;

    	}