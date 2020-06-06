<?php
    class Connect
    {
        public $conn;
        function __construct()
        {
            require_once 'config.php';
            $this->conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
            if(!$this->conn)
            {
                die("Connecting error.");
            }
            return $this->conn;
        }
        public function Close()
        {
            mysqli_close($this->conn);
        }
    }
?>