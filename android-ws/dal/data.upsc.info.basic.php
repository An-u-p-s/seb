<?php
class UpscBasicInfo{
 function query_add_upscBasicInfo($upsc_yr, $notifyReleased, $notifyReleaseOn, $prelimExamMonth, $mainExamMonth){
  $sql="INSERT INTO upsc_exam_info(upsc_yr, notifyReleased, notifyReleaseOn, prelimExamMonth, mainExamMonth) ";
  $sql.="VALUES ('".$upsc_yr."','".$notifyReleased."','".$notifyReleaseOn."','".$prelimExamMonth."','".$mainExamMonth."');";
  return $sql;
 }
 function query_viewYearData_upscBasicInfo($upsc_yr){
  return "SELECT * FROM upsc_exam_info WHERE upsc_yr='".$upsc_yr."';";
 }
 function query_viewYearsList_upscBasicInfo(){
  return "SELECT upsc_yr FROM upsc_exam_info;";
 }
 
 function query_update_upscBasicInfo($upsc_yr, $notifyReleased, $notifyReleaseOn, $prelimExamMonth, $mainExamMonth){
  return "SELECT * FROM upsc_exam_info WHERE upsc_yr='".$upsc_yr."';";
 }
 function query_delete_upscBasicInfo($upsc_yr){
  return "DELETE FROM upsc_exam_info WHERE upsc_yr='".$upsc_yr."';";
 }
}
?>