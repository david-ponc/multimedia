<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link type="text/css" rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="contenedor">
	<img id="img" src="images/img.jpg">
	<div class="caja">
		<button id="btn1">hablar 1</button>
		<button id="btn2">hablar 2</button>
		<button id="btn3">hablar 3</button>
	</div>
</div>
<script src="script/jquery-3.4.1.min.js"></script>
<script>

	$("#btn1").click(function() {
  		var snd = new Audio("song/song1.mp3");
  		snd.play();
			$("#img").addClass("active");
			setTimeout(() => {
				$("#img").removeClass("active");
			}, 5000);
	});
	$("#btn2").click(function() {
  		var snd = new Audio("song/song2.mp3");
  		snd.play();
			$("#img").addClass("active");
			setTimeout(() => {
				$("#img").removeClass("active");
			}, 5000);
	});
	$("#btn3").click(function() {
  		var snd = new Audio("song/song3.mp3");
  		snd.play();
			$("#img").addClass("active");
			setTimeout(() => {
				$("#img").removeClass("active");
			}, 5000);
	});
</script>
</body>
</html>