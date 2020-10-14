<?php include('../db/Db.class.php');
error_reporting(0);
//echo $_REQUEST['function'];
$db = new DB("localhost","gharabhada","root","");
if($_REQUEST['function'] == 'login')
{
       $userid = $_REQUEST['userid'];
       $password = $_REQUEST['password'];
       $db->bindMore(array("userid"=>$userid,"password"=>md5($password), "role"=>'admin'));
       $sql = "select * from user where mobile=:userid and password=:password and role=:role ";
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
if($_REQUEST['function'] == 'locationDtl')
{      
       $loc = array();
       $db->bindMore(array("status"=>"Y", "cityStatus"=>'N'));
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

if($_REQUEST['function'] == 'editLocation' && $_REQUEST['locid']!='')
{      
       $loc = array();
       $db->bindMore(array("status"=>"Y", "cityStatus"=>'N', "id"=>$_REQUEST['locid']));
       //echo $_REQUEST['locid'];
       $sql = "select * from location where id=:id and status=:status and cityStatus=:cityStatus";
       $datas = $db->query($sql);
       foreach($datas as $data){
              $loc['id'] = $data['id'];
              $loc['cityId'] = $data['cityId'];
              $loc['cityName'] = $data['cityName'];
              $loc['location'] = $data['location'];
              $loc['latitude'] = $data['latitude'];
              $loc['longitude'] = $data['longitude'];
       }

       echo json_encode(array($loc));
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

if($_REQUEST['function'] == 'submitLocation')
{
       $id = $_REQUEST['locid'];
	   $cityId = $_REQUEST['cityId'];
	   $cityName = $_REQUEST['cityName'];
	   $location = $_REQUEST['locname'];
	   $latitude = $_REQUEST['lattd'];
	   $longitude = $_REQUEST['longtd'];

       $db->bindMore(array("id"=>$id, "cityId"=>$cityId, "cityName"=>$cityName, "location"=>$location, "latitude"=>$latitude, "longitude"=>$longitude));
       $sql = "update location set cityId=:cityId, cityName=:cityName, location=:location, latitude=:latitude, longitude=:longitude   where id=:id";
       //echo $sql;
       $data = $db->query($sql);	

       if(!empty($data)){
       	 echo json_encode(array("msg"=>"success"));
       }else{
       	 echo json_encode(array("msg"=> "fail"));
       }
}

if($_REQUEST['function'] == 'deleteLocation')
{
       $id = $_REQUEST['locid'];	  
       $db->bindMore(array("id"=>$id, "status"=>"N"));
       $sql = "update location set status=:status where id=:id";       //echo $sql;
       $data = $db->query($sql);	

       if(!empty($data)){
       	 echo json_encode(array("msg"=>"success"));
       }else{
       	 echo json_encode(array("msg"=> "fail"));
       }
}

if($_REQUEST['function'] == 'addLocation')
{
   
	   $cityId = $_REQUEST['cityId'];
	   $cityName = $_REQUEST['cityName'];
	   $location = $_REQUEST['locname'];
	   $latitude = $_REQUEST['lattd'];
	   $longitude = $_REQUEST['longtd'];

       $db->bindMore(array("cityId"=>$cityId, "cityName"=>$cityName, "location"=>$location, "latitude"=>$latitude, "longitude"=>$longitude, "status"=>"Y"));
       $sql = "insert into location set id=NULL, cityId=:cityId, cityName=:cityName, location=:location, latitude=:latitude, longitude=:longitude, status=:status";
       //echo $sql;
       $data = $db->query($sql);	

       if(!empty($data)){
       	 echo json_encode(array("msg"=>"success"));
       }else{
       	 echo json_encode(array("msg"=> "fail"));
       }
}

?>