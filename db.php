<?php
class DB
{
	private $_dbname;
	private $_dbhost;
	private $_dbuser;
	private $_dbpass;
	private $_dbcon;
	private $_error = false;

	public function __construct( $hostname, $username, $password, $dbname) {
		$this->_dbhost = $hostname;
		$this->_dbuser = $username;
		$this->_dbpass = $password;
		$this->_dbname = $dbname;
		            
		    $opts = array(
					PDO::ATTR_ERRMODE    => PDO::ERRMODE_EXCEPTION,
					PDO::ATTR_EMULATE_PREPARES => false
			); 
        
        try
        {
			$this->_dbcon = new PDO('mysql:host='.$this->_dbhost.';dbname='.$this->_dbname.';charset=UTF8',$this->_dbuser, $this->_dbpass, $opts);
			$this->_dbcon->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$this->_dbcon->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
			//echo "connection success";
        } catch(PDOException $e) {
			$this->_error = $e;
			$this->send_mysql_error('CONNECT',$e);
			return false;
		}
	}
	
	private function send_mysql_error($query,$error)
	{
		//TODO: Handle Errors as required
		
		return true;
	}
	
	public function query($sql,$params = "") {
		try {
			$stmt = $this->_dbcon->prepare($sql);
			if(!empty($params)) {
				foreach($params as $param) {
					if($param['type']==="int") {
						$stmt->bindParam($param['name'],$param['value'],PDO::PARAM_INT);
					} else {
						$stmt->bindParam($param['name'],$param['value'],PDO::PARAM_STR);
					}
				}
			}
			$stmt->execute();
			return $stmt->fetchAll(PDO::FETCH_ASSOC);
		} catch(PDOException $e) {
			$this->_error = $e;
			$this->send_mysql_error($sql,$e);
			return false;
		}
	}
	
	public function count($sql,$params = array()) {
		try {
			$stmt = $this->_dbcon->prepare($sql);
			if(!empty($params)) {
				foreach($params as $param) {
					if($param['type']==="int") {
						$stmt->bindParam($param['name'],$param['value'],PDO::PARAM_INT);
					} else {
						$stmt->bindParam($param['name'],$param['value'],PDO::PARAM_STR);
					}
				}
			}
			
			$stmt->execute();
			return count($stmt->fetchAll(PDO::FETCH_ASSOC));
		} catch(PDOException $e) {
			$this->_error = $e;
			$this->send_mysql_error($sql,$e);
			return 0;
		}
	}
	
	public function apply($sql,$params = array(),$return_id=false) {
		try {
			$stmt = $this->_dbcon->prepare($sql);
			if(!empty($params)) {
				foreach($params as $param) {
					if($param['type']==="int") {
						$stmt->bindParam($param['name'],$param['value'],PDO::PARAM_INT);
					} else {
						$stmt->bindParam($param['name'],$param['value'],PDO::PARAM_STR);
					}
				}
			}
			$stmt->execute();
			if($return_id===true)
				return $this->_dbcon->lastInsertId();
			return true;
		} catch(PDOException $e) {
            $this->_error = $e;
            $this->send_mysql_error($sql,$e);
			return false;
		}
	}

	public function error()
	{
		var_dump($this->_error);
	}
}
?>