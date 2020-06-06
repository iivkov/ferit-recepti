<?php
require_once "connect.php";
session_start();

class CatFighter
{
	private $db;
	function __construct()
	{
		$this->db = new Connect();
	}

	public function addFighter($name, $age, $info, $wins, $loss)
	{
		$query = "INSERT INTO cats (name, age, info, wins, loss) VALUES('$name', '$age', '$info', '$wins', '$loss')";
		mysqli_query($this->db, $query);
	}

	public function removeFighter($id)
	{
		$id = $_GET['id'];
		$sql = "DELETE FROM cats WHERE id='$id'";
		mysqli_query($this->db, $sql);
	}
}