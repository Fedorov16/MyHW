
const   company_add = document.querySelector('.company_add'),
        form = document.querySelector('.form');
        

company_add.addEventListener('click', ()=>{
    form.classList.toggle('hide');
});


let formSend = $('#load_form');

formSend.on('submit', function(){
    let company_name = document.getElementById('company_name').value,
        company_inn = document.getElementById('company_inn').value,
        company_director = document.getElementById('company_director').value,
        company_address = document.getElementById('company_address').value,
        company_phone = document.getElementById('company_phone').value,
        company_general = document.getElementById('company_general').value;
      
    $.ajax({
        url: `./add?company_name=${company_name}&company_inn=${company_inn}&company_director=${company_director}&company_address=${company_address}&company_phone=${company_phone}&company_general=${company_general}`,
        success: function(){
        
        }
        })
        .done(function() {
         

        })
    return false;
});

let form_comment_overall = $('#form_comment_overall');

form_comment_overall.on('submit', function(){
    let comment_overall = document.getElementById('comment_overall').value;

    $.ajax({
        url: `./add_comment_overall?comment_desc=${comment_overall}`,
        })
        .done(function() {
         
        })
    return false;
});