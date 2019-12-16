<?php
require_once '../api/app.initiator.php';
require_once '../api/app.database.php';
require_once '../dal/data.upsc.info.basic.php';

$database = new Database($DB_UPSC_SERVERNAME,$DB_UPSC_NAME,$DB_UPSC_USER,$DB_UPSC_PASSWORD);
$upscBasicGoal = new UpscBasicGoal();

 if($_GET["action"]=='add'){
 
  $upsc_yr=$_GET["upsc_yr"];
  $notifyReleased=$_GET["notifyReleased"];
  $notifyReleaseOn=$_GET["notifyReleaseOn"];
  $prelimExamMonth=$_GET["prelimExamMonth"];
  $mainExamMonth=$_GET["mainExamMonth"];
  $query = $upscBasicGoal->query_add_upscBasicGoal($upsc_yr, $notifyReleased, $notifyReleaseOn, 
				$prelimExamMonth, $mainExamMonth);
  echo $database->addupdateData($query);
  
 } else if($_GET["action"]==''){
 
   $upsc_yr=$_GET["upsc_yr"];
   $query = $upscBasicGoal->query_viewYearData_upscBasicGoal($upsc_yr);
   echo $database->getJSONData($query);
   
 } else if($_GET["action"]=='viewYearsList'){
 
   $query = $upscBasicGoal->query_viewYearsList_upscBasicGoal();
   echo '['.implode(",",$database->getAColumnAsArray($query,'upsc_yr')).']';
   
 } else if($_GET["action"]=='viewYearsList'){
 
} else { echo 'MISSING_ACTION'; }




?>