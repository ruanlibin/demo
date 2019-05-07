 <?php
 include('db.php');
 $username = $_POST['loginname'];
 $upassword = $_POST['password']; 
//判断是不是存在相同的用户名
 $selectsql = "select * from user where username='$username'";

  //操作数据
 $selectsqli = $mysqli->query($selectsql);

 $arr=array();
 while($row= $selectsqli->fetch_assoc()){
     array_push($arr,$row);
 }
 $panduan= $arr[0]['username'];
// var_dump($arr);

 if($username== $panduan){
     echo "<script>alert('被注册了')</script>";
  echo "<script> location.href='../html/register.html'</script>";
  die();
 }
// 向数据库添加数据
 $insertSql = "insert into user (username,password) value ('$username','$upassword')";

//  操作数据
 $res = $mysqli->query($insertSql); //当sql语句是插入操作时，返回结果是受印象行数
 if($res){
     echo "<script> location.href='../html/login.html'</script>";
 }
// ?> 