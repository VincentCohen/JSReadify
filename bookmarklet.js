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
    
    jQuery('img').remove();
    jQuery('*').css({
    	'float':'none',
    	'clear':'both',
    	'display':'block',
    	'background':'#E0D3BC',
    	'color':'#E3C694'
    });
    //remove html
    //insert new css
}  