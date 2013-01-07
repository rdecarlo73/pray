$(document).ready(function(){
  $("a").click(function(event){
    //alert(Math.floor((Math.random()*63)+1));
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","http://sleepy-lake-2295.herokuapp.com/prayers/" + Math.floor((Math.random()*62)+1),false);
	xmlhttp.send();
	//var paryer = eval(xmlhttp.responseText());
	alert(xmlhttp.responseText)
  });
});


