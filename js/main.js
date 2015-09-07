$(document).ready(function(){
	//loadToSwap('hello.html');
	//$('#swap').load("html/home.html");
	$("#loadHome").click(function() {
		loadHome();
	});
	$("#loadInfo").click(function() {
		loadInfo();
	});
	if (getCookieValue("position") == "home") {
		$("#swap").load("html/home.html", function() {
			$("#swap").fadeIn("fast");
			$("#campaignPoster").load(function() {
				$('#imageLoader').prop("src", "images/high-campaignPoster.jpg");
				$("#imageLoader").load(function() {
					$("#campaignPoster").prop("src", "images/high-campaignPoster.jpg");
				});
			});
		});
	} else {
		loadInfo();
	}
});

function loadHome() {
	$("#swap").fadeOut('fast', function() {
		$("#swap").load("html/home.html", function() {
			$("#swap").fadeIn("fast");
			createCookie("position", "home", 30);
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
			createCookie("position", "info", 30);
		});
	});
}

function loadToSwap(stringToLoad) {
	$('#swap').load(stringToLoad);
}

function addToSwap(newHtml) {
	$('#swap').html($('#swap').html() + newHtml);
}

function createCookie(name, value, TOL) {
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate()+TOL);
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expireDate + ";";
}

function getCookieValue(name) {
	var data = document.cookie.split(";");
	for (i in data) {
		if (data[i].indexOf(name) > -1) {
			return decodeURIComponent(data[i].split("=")[1].toString());
		}
	}
}
