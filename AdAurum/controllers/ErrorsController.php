<?php

Class ErrorsController{
    public function index(){
        $title = 404;
        include_once('./views/error404.php');
        return;
    }
}