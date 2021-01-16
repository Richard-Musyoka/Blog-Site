<?php

use PHPMailer\PHPMailer\PHPMailer;
if(isset($_POST['name'])&& isset($_POST['email'])){


	$name=$_POST['name'];
	$email=$_POST['email'];
	$