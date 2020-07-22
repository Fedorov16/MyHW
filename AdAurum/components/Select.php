<?php

    class Select 
    {
        private $from;
        private $what = '*';
        private $joins = '';
        private $where = '';
        private $limit = '';
        private $orderBy = '';
        private $having = '';
        private $groupBy = '';

        public function __construct($from) {
			$this->from = $from; 
			return $this;
		}
        public function what($data){
            if(empty($data)){
                echo 'Необходимо передать данные в функцию what';
                exit();
            }
            $what = '';
            foreach ($data as $key => $value){
                if(is_numeric($key)){
                    $what .= "$value, ";
                } else{
                    $what .= "$value AS $key, ";
                }
            }
            $what = rtrim($what, ', ');
            $this->what = $what;
            return $this;
            
        }
        public function joins($data){
            if(empty($data)){
                echo 'Необходимо передать данные в функцию what';
                exit();
            }
            $joins = '';
            foreach($data as $value){
                $joins .= "$value[0] JOIN $value[1] ON $value[2] = $value[3] ";
            }
            $this->joins = $joins;
            return $this;
        }
        public function where($where){
            $this->where = $where;
            return $this;
        }

        public function limit($limit, $offset = 0){
            $this->limit = "LIMIT $offset, $limit";
            return $this;
        }
        public function orderBy($field, $type = 'DESC'){
            $this->orderBy = "ORDER BY $field $type";
            return $this;
        }

        public function having($having){
            $this->having = $having;
            return $this;
        }
        public function groupBy($field){
            $this->groupBy = "GROUP BY $field";
            return $this;
        }
        public function build(){
            $query = 
            "SELECT $this->what
            FROM $this->from
            $this->joins
            $this->where
            $this->groupBy
            $this->having
            $this->orderBy
            $this->limit;
            ";
            return $query;
        }

    }