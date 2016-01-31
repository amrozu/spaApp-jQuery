var $content = $("#content");

$(window)
	.on("load", function(){
		if(location.hash === "" || location.hash === "#home"){
			$content.load("views/home.html");
		}
	})
	.on("hashchange", function(){
		$content.load("views/" + location.hash.substring(1) + ".html");
	});