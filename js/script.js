if(window.innerWidth < 500){
	$(".competence").css("height", "auto");
	$("#progress").css("height", "auto");
	$("#titreXpPro").on("click", function(){
		$("#divXP").slideToggle();
	});
	$("#titreCompetence").on("click", function(){
		$("#progress").slideToggle();
	});
	$("#titreFormation").on("click", function(){
		$("#tableFormation").slideToggle();
	});
	$("#titreOCR").on("click", function(){
		$("#divOCR").slideToggle();
	});
	$("#titreLoisirs").on("click", function(){
		$("#tableLoisirs").slideToggle();
	});
}