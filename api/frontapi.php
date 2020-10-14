<?php include('../db/Db.class.php');
error_reporting(0);
//echo $_REQUEST['function'];
$db = new DB("localhost","gharabhada","root","");
if($_REQUEST['function'] == 'userLogin')
{
       $userid = $_REQUEST['mobno'];
       $password = $_REQUEST['pswd'];
       $db->bindMore(array("mobile"=>$userid,"password"=>md5($password), "role"=>'C', "status"=>"Y"));
       $sql = "select * from user where mobile=:mobile and password=:password and role=:role and status=:status";
       //echo $sql;
       $data = $db->query($sql);
       if(sizeof($data)){
       	 if (session_status() != PHP_SESSION_ACTIVE) { session_start();  }
       	 $_SESSION['userId']=$data[0]['userId'];
       	 $_SESSION['name']=$data[0]['name'];
       	 $_SESSION['email']=$data[0]['email'];
       	 $_SESSION['mobile']=$data[0]['mobile'];
       	 $_SESSION['status']=$data[0]['status'];
       	 echo json_encode(array("msg"=>"success"));
       }else{
       	 echo json_encode(array("msg"=> "fail"));
       }
}
if($_REQUEST['function'] == 'createUser')
{
       $name = $_REQUEST['name'];
       $password = $_REQUEST['pwd'];
       $mobile = $_REQUEST['mobno'];
       $email = $_REQUEST['emailid'];
       $role = $_REQUEST['iam'];

       $db->bindMore(array( "userid"=>$mobile,"email"=>$email, "status"=>"Y"));
       $sql1 = "select * from user where (mobile=:userid or email=:email) and status=:status";
     
       $data1 = $db->query($sql1);
       
       if(sizeof($data1)>0){
         
          echo json_encode(array("msg"=>"duplicate"));

       }else{
       $db->bindMore(array("name"=>$name, "userid"=>$mobile,"password"=>md5($password), "role"=>$role, "email"=>$email, "status"=>"Y"));
       $sql = "insert into user set name=:name, email=:email, mobile=:userid, password=:password, role=:role, status=:status ";
       
       $data = $db->query($sql);
       if(!empty($data)){
              
               echo json_encode(array("msg"=>"success"));
       }else{
               
               echo json_encode(array("msg"=> "fail"));
       }
    }
}


if($_REQUEST['function'] == 'cityDtl')
{      
       $loc = array();
       $db->bindMore(array("status"=>"Y", "cityStatus"=>'Y'));
       $sql = "select * from location where status=:status and cityStatus=:cityStatus";
       $datas = $db->query($sql);
       $i = 0;
       foreach($datas as $data){
              $loc[$i]['id'] = $data['id'];
              $loc[$i]['cityId'] = $data['cityId'];
              $loc[$i]['cityName'] = $data['cityName'];
              $loc[$i]['location'] = $data['location'];
              $loc[$i]['latitude'] = $data['latitude'];
              $loc[$i]['longitude'] = $data['longitude'];
              $i++;
       }

       echo json_encode(array("result"=>$loc));
       //print_r($data);
} 

if($_REQUEST['function'] == 'getLocation' && $_REQUEST['cityid']!='')
{      
       $loc = array();
       $db->bindMore(array("status"=>"Y", "cityStatus"=>'N', "id"=>$_REQUEST['cityid']));
       //echo $_REQUEST['locid'];
       $sql = "select * from location where cityId=:id and status=:status and cityStatus=:cityStatus";
       $datas = $db->query($sql);
       $i=0;
       foreach($datas as $data){
              //$loc[$i]['id'] = $data['id'];
              //$loc[$i]['cityId'] = $data['cityId'];
              //$loc[$i]['cityName'] = $data['cityName'];
              $loc[$i] = $data['location'];
              //$loc[$i]['latitude'] = $data['latitude'];
              //$loc[$i]['longitude'] = $data['longitude'];
              $i++;
       }

       echo json_encode($loc);
       //print_r($data);
} 
if($_REQUEST['function'] == 'getCity')
{
	   $loc = array();
       $db->bindMore(array("status"=>"Y", "cityStatus"=>'Y'));
       $sql = "select * from location where status=:status and cityStatus=:cityStatus";
       //echo $sql;
       $datas = $db->query($sql);
       $i = 0;

       //var_dump($datas);
       foreach($datas as $data){
       	$loc[$i]['id']       = $data['id'];
              $loc[$i]['cityId']   = $data['cityId'];
              $loc[$i]['cityName'] = $data['cityName'];
       	 	  $i++;
        }
        //print_r($loc);
        echo json_encode(array("result"=>$loc));
}






?>