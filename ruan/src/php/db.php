<?php
header("content-type:text/html;charset=utf-8");
$mysql_conf = array(
    'host'=>'127.0.0.1:3306',
    'db_user'=>'root',
    'db_pwd'=>'',
    'db'=>'xiaomi'
);

$mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pwd']); 

if($mysqli->connect_errno){
    die('连接错误'.$mysqli->connect_errno);
}

$mysqli->query("set names 'utf8';");

$select_db = $mysqli->select_db($mysql_conf['db']);

if(!$select_db){
    die('选择数据库错误'.$mysqli->error);
}
