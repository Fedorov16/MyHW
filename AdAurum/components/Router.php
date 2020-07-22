<?php

	class Router 
	{
		private $routes;

		public function __construct() {
			include_once('./config/routes.php');
			$this->routes = $routes;
		}

		public function run() {
			
			$userUrl = explode('?', $_SERVER['REQUEST_URI'])[0];

			foreach ($this->routes as $controller => $patterns) {
				foreach ($patterns as $pattern => $parametrizedAction) {
					$pattern = ROOT . $pattern;
					if (preg_match("~$pattern~", $userUrl)) {
						$controllerObj = new $controller; 
						$parametrizedAction = preg_replace("~$pattern~", $parametrizedAction, $userUrl);
						$parameters = explode('/', $parametrizedAction);
						$action = array_shift($parameters);
						call_user_func([$controllerObj, $action], $parameters);
						exit();
					}
				}
			}
			header('Location: ' . SITE_ROOT . 'index');
			exit();
		}
	}