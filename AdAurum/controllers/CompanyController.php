<?php

	class CompanyController{

		public function index(){
			$title = 'Компании';
			$header = new Header(); 
			$companyModel = new Company();
			$companies = $companyModel->getAll();
			include_once('./views/companies/company.php');	
			
		}
		

		public function view($parameters=[]){
			$id = $parameters[0];
			if(!$id){
				echo 'Некорректный id';
			}
			else{
				$CompanyModel = new Company();
				$company = $CompanyModel->getCompanyById($id);
				$title = $company['company_name'];
				$header = new Header($title);

				//добавляем комментарий компании
				$CommentModel = new Comment();
				$comments = $CommentModel->getOverAllComment($id); 
				// print_r($comments);
				include_once('./views/companies/company_view.php');

			}
		}	
		public function add(){
			
			if (isset($_GET['company_name'])){
				
				echo " Вызван Add2";
				
				$name = $_GET['company_name'];
				$inn = $_GET['company_inn'];
				$director = $_GET['company_director'];
				$address = $_GET['company_address'];
				$phone = $_GET['company_phone'];
				$general = $_GET['company_general'];
				
					$companyModel = new Company();
					
					$company = [
						'company_name' => $name,
						'company_inn' => $inn,
						'company_director' => $director,
						'company_address' => $address,
						'company_phone' => $phone,
						'company_general' => $general,
					];
					print_r($company);
					$newCompany = $companyModel->AddCompany($company);
				}
			}
			public function add_comment_overall(){
				$str = $_SERVER['HTTP_REFERER'];;
				$date = explode("/", $str);
				$id = $date[6];
				$comment = $_GET['comment_desc'];
				
				$commentModel = new Comment();
				$newComment = $commentModel->AddCommentOverall($comment, $id);
			}
		
	}