var num=1;
var cargado=false;
var json1="https://github.com/Lucas-Almada/Noticias/blob/master/json/n1.json";
var json2="https://github.com/Lucas-Almada/Noticias/blob/master/json/n2.json";
var listaJson= [json1, json2];
var scrollactivate=true;
	
$(document).ready(function() {
	setInterval(cambiarImagen, 1500);

$("#cargmas").click(function(){
       cargarNoticias();
});
    
$("#botonscroll").click(function(){
	if (scrollactivate){
        	scrollactivate=false;
        } else {
        	scrollactivate=true;
        }
    });
    
    $(window).scroll(function () {
        if (scrollactivate){
                if ($(window).scrollTop() + $(window).height() == $(document).height()){
                    cargarNoticias();
                }
			}
		});
	});
	
	function cambiarImagen() {
		if (num == 3) {
			num = 1;
		}else{
			num++;
		}
	

	function cargarnoticia() {
		if (json == 2) {
			$("#cargmas").html("Hasta aqui llegamos")
			alert("Hasta aqui llegamos");
			
		}else{
			if (cargado) {
				$getJSON(listaJson[1] (jsonObject){
					datos="<div class='row'> <div class='col-sm-4'> <div class='noticia'> <h1> " +jsonObject.noticias[0].title+ "</h1> <div class='text-center'> <img class='imagenNoticia1' src='"+jsonObject.noticias[0].imgurl+"'/> </div> <p>"+jsonObject.noticias[0].content+"</p> </div> </div> <div class='col-sm-4'> <div class='noticia'> <h1> " +jsonObject.noticias[1].title+ "</h1> <div class='text-center'> <img class='imagenNoticia1' src='"+jsonObject.noticias[1].imgurl+"'/> </div> <p>"+jsonObject.noticias[1].content+"</p> </div> </div> <div class='col-sm-4'> <div class='noticia'> <h1> " +jsonObject.noticias[2].title+ "</h1> <div class='text-center'> <img class='imagenNoticia1' src='"+jsonObject.noticias[2].imgurl+"'/> </div> <p>"+jsonObject.noticias[2].content+"</p> </div> </div> </div>;
					$("#contenedornoticias").append(datos);
				});
			 } else {

            $.getJSON(listaJson[0], function (jsonObject){
                datos="<div class='row'> <div class='col-sm-4'> <div class='noticia'> <h1> " +jsonObject.noticias[0].title+ "</h1> <div class='text-center'> <img class='imagenNoticia1' src='"+jsonObject.noticias[0].imgurl+"'/> </div> <p>"+jsonObject.noticias[0].content+"</p> </div> </div> <div class='col-sm-4'> <div class='noticia'> <h1> " +jsonObject.noticias[1].title+ "</h1> <div class='text-center'> <img class='imagenNoticia1' src='"+jsonObject.noticias[1].imgurl+"'/> </div> <p>"+jsonObject.noticias[1].content+"</p> </div> </div> <div class='col-sm-4'> <div class='noticia'> <h1> " +jsonObject.noticias[2].title+ "</h1> <div class='text-center'> <img class='imagenNoticia1' src='"+jsonObject.noticias[2].imgurl+"'/> </div> <p>"+jsonObject.noticias[2].content+"</p> </div> </div> </div>";
                $("#contenedornoticias").append(datos);
                cargado=true;
                json++;
            });
        }
