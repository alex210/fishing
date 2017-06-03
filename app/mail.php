<?php

$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {
	$project_name = trim($_POST["project_name"]);
	$admin_email = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);
	$name = trim($_POST["name"]);
  $phone = trim($_POST["phone"]);
  $message = "Имя: $name \nТелефон: $phone";

	$pagetitle = "Новая заявка с сайта \"$form_subject\"";
  mail($admin_email, $project_name, $message, "Content-type: text/plain; charset=\"UTF-8\"\n From: $admin_email");
}

?>