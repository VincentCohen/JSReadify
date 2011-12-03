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
    
    $('*')
    .filter(function() {
        return $.trim($(this).text()) === ''
    })
    .remove()

}  