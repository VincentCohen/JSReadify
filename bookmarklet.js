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
    jQuery('img,link,style,a,form,header,#header,footer,#footer').remove();
    
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
	var t_elem;
	$("body *").each(function () {
	    $this = $(this);
	    if ( $this.outerHeight() > highest ) {
	        t_elem	=	this;
	        highest		=	$this.outerHeight();
	    }
	});
	
	console.log(t_elem);
}  