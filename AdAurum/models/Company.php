<?php

	class Company
	{
		public function getAll() {
			$company_query = DB::connect();
			$query=(new Select('companies'))
				-> build();
			$get_companies = $company_query->query($query);
			$result = $get_companies->fetchAll();
			return $result;
		}

		public function getCompanyById($id){
			$company_query = DB::connect();
			$query=(new Select('companies'))
				->where ("WHERE company_id = '$id'")
				->build();
			$getCompanyById = $company_query->query($query);
			$result = $getCompanyById->fetch();
			return $result;
		}

		public function AddCompany($company){
			$company_query = DB::connect();
			$query = (new InsertInto('companies'))
			->set([	'company_name' => $company['company_name'],
					'company_inn' => $company['company_inn'],
					'company_director' => $company['company_director'],
					'company_address' => $company['company_address'],
					'company_phone' => $company['company_phone'],
					'company_general' => $company['company_general'],
					])
			->build();
			$NewCompany = $company_query->query($query);
		}

}