<?php
require_once '../api/app.initiator.php';
require_once '../api/app.database.php';
require_once '../dal/data.upsc.accounts.php';

$database = new Database($DB_UPSC_SERVERNAME,$DB_UPSC_NAME,$DB_UPSC_USER,$DB_UPSC_PASSWORD);
$upscAccounts = new UpscAccounts();

 if($_GET["action"]=='add'){
 
    $account_Id=$_GET["account_Id"];
    $name=$_GET["name"];
    $email=$_GET["email"];
    $acc_pwd=$_GET["acc_pwd"];
    $prep_plan_year=$_GET["prep_plan_year"];
    $query = $upscAccounts->query_add_accountInfo($account_Id, $name, $email, $acc_pwd, $prep_plan_year);
    echo $database->addupdateData($query);
  
 } else if($_GET["action"]=='update'){
 
    $account_Id=$_GET["account_Id"];
    $name=$_GET["name"];
    $email=$_GET["email"];
    $acc_pwd=$_GET["acc_pwd"];
    $prep_plan_year=$_GET["prep_plan_year"];
    $query = $upscAccounts->query_update_accountInfo($account_Id, $name, $email, $acc_pwd, $prep_plan_year);
    echo $database->addupdateData($query);
  
 } else if($_GET["action"]=='view'){
 
	$email=$_GET["email"];
	$acc_pwd=$_GET["acc_pwd"];
    $query = $upscAccounts->query_view_accountInfo($email, $acc_pwd);
	echo $database->getJSONData($query);
	
 }
 else { echo 'MISSING_ACTION'; }
