	var num=1;
	var cargado=false;
	var json1="";
	var json2="";
	var listaJson= [json1, json2];
	var scrollactivate=true;

	$("#cargarmas").click(function(){
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
