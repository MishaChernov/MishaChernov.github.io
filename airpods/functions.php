<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$msg = 'Имя: ' . $name ."\n"
	.'Телефон: ' . $phone ."\n";


	 mail('mishachernov8063@gmail.com' ,'Новый заказ' , $msg);
	 header('Location: thankyou.html');
}
?>
