$(document).ready(function(){
	//loadToSwap('hello.html');
	//$('#swap').load("html/home.html");
	$("#loadHome").click(function() {
		loadHome();
	});
	$("#loadInfo").click(function() {
		loadInfo();
	});
	loadHome();
});

function loadHome() {
	$("#swap").fadeOut('fast', function() {
		$("#swap").load("html/home.html", function() {
			$("#swap").fadeIn("fast");
			$("#campaignPoster").load(function() {
				$('#imageLoader').prop("src", "images/high-campaignPoster.jpg");
				$("#imageLoader").load(function() {
					$("#campaignPoster").prop("src", "images/high-campaignPoster.jpg");
				});
			});
		});
	});
	//loadImage("#campaignPoster", "images/high-campaignPoster.jpg");
}

function loadInfo() {
	$("#swap").fadeOut("fast", function() {
		$("#swap").load("html/info.html", function(){
			$("#swap").fadeIn("fast");
		});
	});
}

function loadToSwap(stringToLoad) {
	$('#swap').load(stringToLoad);
}

function addToSwap(newHtml) {
	$('#swap').html($('#swap').html() + newHtml);
}
