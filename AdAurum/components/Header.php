<?php

class Header{

    public function __construct($title = 'Компании'){
        
        include_once('./views/templates/head.php');
        include_once('./views/templates/header.php');
    }
}