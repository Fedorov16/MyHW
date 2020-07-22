<?php

	$routes = [
		"CompanyController" => [
			"companies/list" => "index",
			"company/view/([0-9]+)" => "view/$1",
			"companies/add" => "add",
			"company/view/add_comment_overall" => "add_comment_overall",
			
		],
		"ErrorsController" =>[
			"index" => "index"
		]
	];