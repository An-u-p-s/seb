<?php
class UpscAccounts{
 function query_add_accountInfo($account_Id, $name, $email, $acc_pwd, $prep_plan_year){
  $sql="INSERT INTO user_accounts(account_Id, name, email, acc_pwd, prep_plan_year) ";
  $sql.="VALUES ('".$account_Id."','".$name."','".$email."','".$acc_pwd."','".$prep_plan_year."');";
  return $sql;
 }
 function query_view_accountInfo($email, $acc_pwd){
  $sql="SELECT * FROM user_accounts WHERE email='".$email."' AND acc_pwd='".$acc_pwd."';";
  return $sql;
 }
 function query_update_accountInfo($account_Id, $name, $email, $acc_pwd, $prep_plan_year){
  $sql="UPDATE user_accounts SET";
  if(strlen($name)>0){ $sql.=" name='".$name."',"; }
  if(strlen($email)>0){ $sql.=" email='".$email."',"; }
  if(strlen($acc_pwd)>0){ $sql.=" acc_pwd='".$acc_pwd."',"; }
  if(strlen($prep_plan_year)>0){ $sql.=" prep_plan_year='".$prep_plan_year."',"; }
  $sql=chop($sql,',');
  $sql.=" WHERE account_Id='".$account_Id."';";
  return $sql;
 }
}
?>