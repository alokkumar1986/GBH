<?php 
if (session_status() != PHP_SESSION_ACTIVE) { session_start(); }

// remove all session variables
session_unset();

// destroy the session
session_destroy();

echo $_SESSION['userId']; 

include("session_check.php");
?>