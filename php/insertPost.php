<?php
		include_once('db.php');
        $postAuthor = $_POST['postAuthor'];
        $postContent = $_POST['postContent'];
        $sql = "INSERT INTO post (user, content) VALUES ('".$postAuthor."', '".$postContent."');";
        $result = mysqli_query($conn, $sql);
        echo $result;
?>
