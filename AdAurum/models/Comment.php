<?php

Class Comment {

    public function getOverAllComment($id){
        $comment_query = DB::connect();
        $query=(new Select('comment_overall'))
            -> where("WHERE comment_company_id = $id")
            -> build();
        $get_comments = $comment_query->query($query);
        $result = $get_comments->fetchAll();
        return $result;
    }
    public function AddCommentOverall($comment, $id){
        $comment_query = DB::connect();
			$query = (new InsertInto('comment_overall'))
			->set([	'comment_desc' => $comment,
					'comment_company_id' => $id,
					'comment_user_id' => '1',
					])
			->build();
			$NewComent = $comment_query->query($query);
    }

}