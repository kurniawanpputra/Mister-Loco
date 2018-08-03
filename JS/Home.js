// JQUERY DROPDOWN
	$(function(){
		$('#drop').click(function(){
			$('#dropdown').slideToggle(400);
		});
	});
// JS SLIDER
	var imgsld = [
	    './Img/slidex.jpg', 
	    './Img/slidey.jpg'
	];

	var i = 0;
	function next() {
	    var slide = document.getElementById('slider');
	    i = i+1;
	    if(i >= imgsld.length) {
	        i = 0;
	    }
	    slide.src = imgsld[i];
	}
	
	function prev() {
	    var slide = document.getElementById('slider');
	    i = i-1;
	    if(i < 0) {
	        i = imgsld.length-1;
	    }
	    slide.src = imgsld[i];
	}