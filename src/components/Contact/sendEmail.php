<?php

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$max_submissions_per_minute = 4;

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$current_time = time();

$last_submission_time = isset($_SESSION['last_submission_time']) ? $_SESSION['last_submission_time'] : 0;

if ($current_time - $last_submission_time < 1800) {
  $submissions_in_last_minute = isset($_SESSION['submissions_in_last_minute']) ? $_SESSION['submissions_in_last_minute'] : 0;
  if ($submissions_in_last_minute >= $max_submissions_per_minute) {
    $response = array('success' => false, 'message' => 'Le nombre maximal de soumissions par minute a été atteint. Veuillez réessayer plus tard.');
    echo json_encode($response);
    return;
  }
} else {
  $_SESSION['submissions_in_last_minute'] = 0;
}

$email_pattern = '/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/';

if (!preg_match($email_pattern, $email)) {
  $response = array('success' => false, 'message' => 'Adresse email non valide.');
  echo json_encode($response);
  return;
} 

if (empty($name) || empty($email) || empty($message)) {
  $response = array('success' => false, 'message' => 'Tous les champs sont obligatoires.');
  echo json_encode($response);
  return;
}

$mail = new PHPMailer(true);

$response = ['success' => false, 'message' => 'Erreur lors de l\'envoi du message'];

try {
  // Configuration du serveur SMTP
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'mesprojets1butinf@gmail.com';
  $mail->Password   = 'bgmsfuinaktehrup';
  $mail->SMTPSecure = 'tls';
  $mail->Port       = 587;

  // Paramètres du mail
  $mail->setFrom('mesprojets1butinf@gmail.com', 'Mailer');
  $mail->addAddress('njrab21@gmail.com', 'Receveur');
  $mail->isHTML(true);
  $mail->Subject = 'Message formulaire contact';
  $mail->Body  = "<!DOCTYPE html>
   <html>
   <head>
       <title>Email Form Contact</title>
   </head>
   <style>
   table {
       border-collapse: collapse;
       border: 1px solid #ddd;
       padding: 8px;
   }
    tr:nth-child(even){background-color: #f2f2f2;}
   th {
       padding-top: 12px;
       padding-bottom: 12px;
       text-align: left;
       background-color: #4CAF50;
       color: white;
   }
   </style>
   <body>
       <header>
           <h1>Info Contact</h1>
       </header>
       <main>
       <table>
        <tr><th>Name</th><td>$name</td></tr>
        <tr><th>Email</th><td>$email</td></tr>
        <tr><th>Message</th><td>$message</td></tr>
       </table>
       </main>
   </body>
   </html>";
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $mail->send();

  $response = ['success' => true, 'message' => 'Message envoyé avec succès'];
} catch (Exception $e) {
  $response = ['success' => false, 'message' => "Erreur lors de l'envoi du message : {$mail->ErrorInfo}"];
}

$_SESSION['submissions_in_last_minute']++;
$_SESSION['last_submission_time'] = $current_time;

header('Content-Type: application/json');
echo json_encode($response);
?>
