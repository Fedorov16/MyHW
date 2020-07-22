<?php

    class InsertInto 
    {
        private $from;
        private $set = '';

        public function __construct($from) {
			$this->from = $from; 
			return $this;
        }
        
        public function set($data){
            if(empty($data)){
                echo 'Необходимо передать данные в функцию set';
                exit();
            }
            $set = '';
            foreach ($data as $k => $v){
                $set .= "`$k` = '$v', ";
            }
            $set = rtrim($set, ', ');
            $this->set = $set;
            return $this;
            
        }

        public function build(){
            $query = 
            "INSERT INTO $this->from
            SET $this->set;
            ";
            return $query;
        }

    }