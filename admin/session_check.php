<?php error_reporting(0);
if (session_status() != PHP_SESSION_ACTIVE){ session_start(); }
if(!isset($_SESSION['userId']) && empty($_SESSION['userId']))
{
   header("location: index.php");
   exit;
}
?>