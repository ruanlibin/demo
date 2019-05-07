<?php
 include('db.php');

 $username = $_POST['loginname'];
 $upassword = $_POST['password'];
// 查询数据库
 $sql = "select * from user where username='$username' and password='$upassword'";
 
 $result = $mysqli->query($sql);//返回找到的字符集
 if($result->num_rows>0){
    echo "<script src='../js/cookie.js'></script>";
    echo "<script> cookie.set('isLogin','true',2);
     cookie.set('username','$username',2);</script>";
     echo "<script>alert('登录成功，点击跳转'); location.href='../html/index.html';</script>";
 }else{
     echo "<script>alert('登录失败，点击跳转'); location.href='../html/login.html';</script>";
 }
?>