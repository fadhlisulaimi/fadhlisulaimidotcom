<?php
$connection = mysql_connect("localhost", "fadhlisu_fadhli", "Hamsu5a6!"); // Establishing Connection with Server..
$db = mysql_select_db("fadhlisu_portfolio", $connection); // Selecting Database

if(isset($_POST['name'],$_POST['phone'],$_POST['email'],$_POST['subject'],$_POST['content'])){


	//Fetching Values from URL
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$subject=$_POST['subject'];
$content=$_POST['content'];

//Insert query
$query = mysql_query("insert into contact(Name, Email, Phone, Subject,Content) values ('$name', '$email', '$phone','$subject','$content')");
echo "Form Submitted Succesfully";
mysql_close($connection); // Connection Closed
}



?>