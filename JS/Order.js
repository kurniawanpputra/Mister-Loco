// JQUERY DROPDOWN
	$(function(){
		$('#drop').click(function(){
			$('#dropdown').slideToggle(400);
		});
	});

// FORM VALIDATION
	function validate(){
	  	var in1 = document.getElementById("product");
	  	var in2 = document.getElementById("quantity");
	  	var in3 = document.getElementById("name");
	  	var in4 = document.getElementById("email");
	  	var in5 = document.getElementById("phone");
	  	var in6 = document.getElementById("address");
	  	var in7 = document.getElementById("check");

	  	if(in1.value == ""){
	  		alert("Product name can't be empty.");
	  		return false;
	 	}
	 	if(in2.value < 1){
	 		alert("Quantity can't be less than one.");
	 		return false;
	 	}
	 	if(in3.value == "" || in3.value.length < 8){
	 		alert("Name can't be empty and can't be less than 8 characters.");
			return false;
	 	}
	 	if(in4.value == ""){
	  		alert("Email can't be empty.");
			return false;
	 	}
	 	if(in5.value == "" || in5.value.length < 10 || in5.value.length > 13){
	 		alert("Phone numbers can't be empty and must be between 10-13 numbers.");
			return false;
	 	}
	 	if(in6.value == "" || in6.value.length < 20){
	 		alert("Address can't be empty and can't be less than 20 characters.");
	 		return false;
	 	}
		if(!in7.checked)
		{
		    alert('You must accept the Terms And Agreements first.');
		    return false;
		}
		
		alert("Order placed with id #ddmmyyhhmmproductid.");
		return true;
	}