<?php
class UpscBasicGoal{
 function query_add_upscBasicGoal($upsc_yr, $notifyReleased, $notifyReleaseOn, $prelimExamMonth, $mainExamMonth){
  $sql="INSERT INTO upsc_exam_goal(upsc_yr, notifyReleased, notifyReleaseOn, prelimExamMonth, mainExamMonth) ";
  $sql.="VALUES ('".$upsc_yr."','".$notifyReleased."','".$notifyReleaseOn."','".$prelimExamMonth."','".$mainExamMonth."');";
  return $sql;
 }
 function query_viewYearData_upscBasicGoal($upsc_yr){
  return "SELECT * FROM upsc_exam_goal WHERE upsc_yr='".$upsc_yr."';";
 }
 function query_viewYearsList_upscBasicGoal(){
  return "SELECT upsc_yr FROM upsc_exam_goal;";
 }
 
 function query_update_upscBasicGoal($upsc_yr, $notifyReleased, $notifyReleaseOn, $prelimExamMonth, $mainExamMonth){
  return "SELECT * FROM upsc_exam_goal WHERE upsc_yr='".$upsc_yr."';";
 }
 function query_delete_upscBasicGoal($upsc_yr){
  return "DELETE FROM upsc_exam_goal WHERE upsc_yr='".$upsc_yr."';";
 }
}
?>