if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too  
	script		= document.createElement( 'script' );  
	script.src	= 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';  
	script.onload=Readify;  
	document.body.appendChild(script);  
}  
else {  
    Readify();  
}  
  
function Readify() {  
    alert('lets make this page beautifull!');
    //remove unnecessary elements
    //jQuery('img,link,style,a,form,header,#header,footer,#footer').remove();
    
    /*$('body *')
    .filter(function() {
        return $.trim($(this).text()) === ''
    })
    .remove()
	.css({
		'font-size':'1.3em',
		'line-height':'0.5em'
	});*/
	
	var highest	=0;
	var mainContainer;
	$("body *").each(function () {
	    $current = $(this);
	    if ( $current.outerHeight() > highest ) {
	        mainContainer	=	this;
	        highest			=	$current.outerHeight();
	    }
	});
	
	var $newContainer = $(mainContainer).html();
	
	 $($newContainer + 'img, ' 
	 	+ $newContainer + ' script, '
	 	+ $newContainer + ' style,' 
	 	+ $newContainer + ' a,' 
	 	+ $newContainer + ' form,'
	 	+ $newContainer + ' header,'
	 	+ $newContainer + ' #header,' 
	 	+ $newContainer + 'footer,' 
	 	+ $newContainer + ' #footer').remove();
	 	
	 console.log($newContainer);
}  