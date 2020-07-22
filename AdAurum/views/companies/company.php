
  <section>
    <div class="container">
      <div class="row">
        <?php foreach($companies as $company){extract($company, EXTR_OVERWRITE) ?>

          <div class="col-12 col-6 col-md-4">
            <div class="company">
              <h2 class="company__name"><a href="<?= SITE_ROOT . 'company/view/' . $company_id?>"><?= $company_name ?></a></h2>
              <p class="company_phone">Тел. <a class="company_phone_link" href="tel:<?= $company_phone ?>"><?= $company_phone ?></a></p>
            </div>
          </div>
        <?php } ?>
      </div>
      <a href="#" class="btn btn-secondary btn-lg active company_add" role="button" aria-pressed="true">Добавить компанию</a>
      <div class="form hide">
        <form method="POST" id = "load_form">
          <div class="form-group">
              <label for="company_name">Название компании</label>
              <input type="text" class="form-control" name='company_name' id="company_name">
          </div>
          <div class="form-group">
              <label for="company_inn">ИНН Компании</label>
              <input type="text" class="form-control" name='company_inn' id="company_inn">
          </div>
          <div class="form-group">
              <label for="company_director">Директор</label>
              <input type="text" class="form-control" name='company_director' id="company_director">
          </div>
          <div class="form-group">
              <label for="company_address">Адресс</label>
              <input type="text" class="form-control" name='company_address' id="company_address">
          </div>
          <div class="form-group">
              <label for="company_phone">Телефон</label>
              <input type="text" class="form-control" name='company_phone' id="company_phone">
          </div>
          <div class="form-group">
              <label for="company_general">Основная информация</label>
              <textarea class="form-control" id="company_general" name='company_general' rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary ajax_send">Добавить</button>
        </form>
      </div>
    </div>
      
  </section>

<?php include_once('./views/templates/footer.php'); ?>