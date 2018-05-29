	var maxnumero=3;
	var numero=1;

	$(function () {
		$(window).scroll(function () {
			console.log("ScrollTop: "+ $(window).scrollTop()+
			"\n alto ventana: " + $(window).height() +
			"\n alto documento: " + $(document).height() +"\n");
	
		if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()){
			if (numero < 3) {
			$.getJSON("" + numero + ".json", function(jsonObject) {
				antiguo( jsonObject );
			})
			numero++
			}else{
				$('#btn').text('No hay más noticias');
			};
		};
		});
		$("#btn").click(function(){
			cargar();
			numero++;
		});
	});
	
	function cargar (){
		$.getJSON("" + numero + ".json", function( jsonObject ){
			antiguo( jsonObject );
		});
	};
	
	function antiguo(json){
	
			$.each( json, function( i, noticia ) {
		$("#noticias").append
		('<br>'+'<h2>' + noticia.title + '</h2>'+
		'<div class="well"><div clas="container-fluid"> <img class="pimg" src="' + noticia.imgurl + '" alt="Noticias Anteriores" class="pimg">'+
		'</img><p>' + noticia.content + '</p></div></div>'+'<br>')
		}); 
	
};
	var contador=1;
	var Temporizador = setInterval(MyTimer, 1500);
	var c=[];
	c[0]="https://farm2.staticflickr.com/1513/25285783193_373241aeaa_c.jpg"
	c[1]="http://1.bp.blogspot.com/-tHK4ztteVZc/T5XEDVPwCWI/AAAAAAAAApk/R6HEZVAr01s/s1600/wallpaper-1441835.jpg"
	c[2]="http://www.v3wall.com/wallpaper/1920_1200/1502/1920_1200_20150212120317322658.jpg"
	
	function MyTimer() {
		contador++;
		$("#publi img").attr('src',c[contador-1]);;
		if (contador==3) contador=0;
	}
