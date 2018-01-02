<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $phone = $_POST['phone'];


  $email_from = 'eyalivne@gmail.com';
  $email_subject = "New Form submission";
  $email_body = "You have received a new message from the user $name.\n".
                          "Here is the phone:\n $phone".

  $to = "eyalivne@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

 ?>
