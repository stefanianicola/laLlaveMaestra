<?php
/**
 * @version 1.0
 */

require("./phpmailer/class.phpmailer.php");
require("./phpmailer/class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["apellido"]) || !isset($_POST["correo"]) ) {
	header('location: ./formulario.html'); 
    die ("Es necesario completar todos los datos del formulario");
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["correo"];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "cr1.toservers.com"; // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "no-respond@damiandelper.com";  // Mi cuenta de correo
$smtpClave = "cLg0OU0xMqbT";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "llavemaestraok@gmail.com";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "Informacion de usuario - Laver Test"; // Este es el titulo del email.
$nombreHtml = nl2br($nombre);
$apellidoHtml = nl2br($apellido);
$emailHtml = nl2br($email);
$mail->Body = "Nombre y Apellido: {$nombreHtml} {$apellidoHtml} <br /> Email: {$emailHtml} <br /><br />Datos enviados desde Laver Test<br />"; // Texto del email en formato HTML
//$mail->AltBody = "{$mensaje} \n\n"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    header("location: ./laverTest.html?name=$nombre&apellido=$apellido&email=$email"); 
} else {
    header('location: ./formulario.html?sent=error');
}
