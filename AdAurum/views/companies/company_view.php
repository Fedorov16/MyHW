<?php extract($company, EXTR_OVERWRITE);?>

<section>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Название компании: <?= $company_name; ?></h2><br>
                <p class="company_inn">ИНН: <?= $company_inn ?> </p>
                <p class="company_general">Основная информация: <?= $company_general ?> </p>
                <p class="company_director">Директор: <?= $company_director ?> </p>
                <p class="company_address">Адресс компании <?= $company_address ?> </p>
                <p class="company_phone">Тел. <a class="company_phone_link" href="tel:<?= $company_phone ?>"><?= $company_phone ?></a></p>
            </div>
            <div class="col-12">
                <a href="#" class="btn btn-secondary btn-lg active company_add" role="button" aria-pressed="true">Комментарии к компании <?= $company_name; ?></a>
                <div class="form hide">
                    <?php foreach($comments as $comment){extract($comment, EXTR_OVERWRITE) ?>
                    <p class="comment_desc"><?= $comment_desc; ?> </p>
                    <p class="comment_date"><?= $comment_date; ?> </p>
                    <?php } ?>
                    <form method="POST" id = "form_comment_overall">
                        <div class="form-group">
                            <label for="comment_overall">Оставить комментарий компании</label>
                            <input type="text" class="form-control" name='comment_overall' id="comment_overall">
                        </div>
                        <button type="submit" class="btn btn-primary">Добавить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include_once('./views/templates/footer.php'); ?>