var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

$(document).ready(function(){
	//loadToSwap('hello.html');
	//$('#swap').load("html/home.html");
	
	$("#loadHome").click(function() {
		loadHome();
	});
	$("#loadInfo").click(function() {
		loadInfo();
	});
	$("#loadPosts").click(function() {
		loadPosts();
	});
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

function loadPosts() {
	$("#swap").fadeOut('fast', function() {
		$("#swap").load("html/posts.html", function() {
			$("#swap").fadeIn("fast");
			
			$("#pageNumber").change(function() {
				var page = $(this).val();
				$.ajax({
            		type: 'post',
             		url: 'php/loadPosts.php',
             		data: {pageNumber:page},
             		success: function(data) {
	                	$("#swap2").html(data);
             		},
             		error: function() {
            	    	alert("We were unable to load the posts :'(");
             		}
         		});
				
			});
			$("#submitPost").click(function() {
				if ($('#postAuthor').val() != "" && $('#postContent').val() != "") {
					submitForm("#postForm", "#swap2");
				} else {
					alert("I cannot accept a blank post.");
				}
			});
			
			$("#postForm").submit(function() {
				return false;
			});
			$.ajax({
            	type: 'post',
             	url: 'php/loadPosts.php',
             	success: function(data) {
                	$("#swap2").html((data));
                	var i = parseInt($("#numberOfPosts").text());
                	var optionString = "";
                	for(var j = 1; i > 0; j++) {
                		optionString = optionString + "<option value="+j * 10+">Page "+j+"</option>";
                		i = i - 10;
                	}
                	$("#pageNumber").html(optionString);
             	},
             	error: function() {
                	alert("We were unable to load the posts :'(");
             	}
         	});
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

function submitForm(formID, resultContainerID) {
    $("#postAuthor").val(escapeHtml($("#postAuthor").val()));
    $("#postContent").val(escapeHtml($("#postContent").val()));
    $.post(
        $(formID).attr('action'),
        $(formID).serializeArray(),
        function(data) {
           loadPosts();
        }
    );
}

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
 }