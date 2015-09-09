<?php
	include_once('db.php');
	$sql = "select user, content from post;";
	$result = mysqli_query($conn, $sql);
	while ($row = mysqli_fetch_assoc($result)) {
		

	$html = "<div class='row'>
				<div>
					<p class='col-sm-4 col-sm-offset-4 text-center margin-bot-2 post'>
						".$row['content']."
					</p>
					<span class='author'>
						".$row['user']."
					</span>
				</div>
			</div>";
		echo $html;
	}

?>