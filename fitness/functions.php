<?php

if(isset($_POST['submit'])) {
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];





	$msg = 'שם : ' . $first_name ."\n"
	.'טלפון: ' . $phone ."\n"
	. 'דואר אלקטרוני: ' . $email."\n" ;


	 mail('eyalivne@gmail.com' ,'נרשם חדש - KMT - מרכזיית VOIP' , $msg);

	//mail($to,$subject,$txt,$headers);
		header('Location: thanks.php');
		echo $msg;
}
?>
