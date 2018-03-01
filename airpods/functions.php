<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$msg = 'name: ' . $name ."\n"
	.'phone; ' . $phone ."\n";


	 mail('mishachernov8063@gmail.com' ,'נרשם חדש - KMT - מרכזיית VOIP' , $msg);

	//mail($to,$subject,$txt,$headers);
		header('Location: thankyou.php');
		echo $msg;
}
?>
