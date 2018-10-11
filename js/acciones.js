$("ul.nav li a[href^='#'], a.navbar-brand").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 900, function(){

       window.location.hash = hash;
     });
});

$(function() {
	var x = Math.floor((Math.random() * 3) );
	var color = "";

	switch(x){
		case 0: color = "naranja"; break;
		case 1: color = "rojo"; break;
		case 2: color = "verde"; break;
	}

    $('head').append('<link rel="stylesheet" href="css/navbar-'+color+'.css" type="text/css" />');
});