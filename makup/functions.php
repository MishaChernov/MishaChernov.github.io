<?php

if(isset($_POST)) {
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];

	$msg = 'שם : ' . $name ."\n"
	.'טלפון: ' . $phone ."\n"
	. 'דואר אלקטרוני: ' . $email."\n" ;

	 mail('mishachernov8063@gmail.com' ,'new message from Flawless' , $msg);

	//mail($to,$subject,$txt,$headers);
		header('Location: thankyou.html');
}
?>
