<?php

    spl_autoload_register(function($className){

        $arrDirectories = [
            'components/',
            'controllers/',
            'models/',
        ];

        foreach($arrDirectories as $directory){

            $classPath = FILE_ROOT . $directory . $className . '.php';
            if(is_file($classPath)){
                include_once($classPath);
                break;
            }
        }

    });