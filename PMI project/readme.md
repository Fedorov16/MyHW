# Philip Morris International
## создание гайд-тура на рабочем портале

1. Написан серверный скрипт, собирающий данный с таблиц и генерирующий тест с рандомными значениями:
```
// таблица ASG

var recASG = new GlideRecord('asmt_assessment');
recASG.initialize();
recASG.metric_type = "36cc0ddedb35d8101bfb264cd3961984"; //FSV test result
var recASGResult = recASG.insert();

// таблица AIN(AIN содержит собранные тесты)

var rec = new GlideRecord('asmt_assessment_instance');
	rec.initialize();
    rec.user = gs.getUserID(); 
    rec.metric_type = "36cc0ddedb35d8101bfb264cd3961984"; //FSV test result
    rec.due_date = gs.nowDateTime();
    rec.expiration_date = gs.nowDateTime();
    rec.assessment_group = recASGResult;
    var recResult = rec.insert();


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//достаем вопросы из каждой категории
var gr_CoE = new GlideRecord('asmt_metric');
        gr_CoE.addQuery("category.name", 'PMI_CoE');
        gr_CoE.query();

var arr = [];
while(gr_CoE.next()) {
    arr.push(gr_CoE.getValue('sys_id'));
}
gs.addInfoMessage('1 ' + arr);
var arrNew = [];
for(var i = 0; i < 2; i++){
  var key = getRandomInt(4);
  
  var item = (arr[key]);
  if((arrNew.indexOf(item)) >= 0){
      i--;
  }
  else{
      arrNew.push(item);
    }
}

var gr_General = new GlideRecord('asmt_metric');
    gr_General.addQuery("category.name", 'PMI_General');
    gr_General.query();

var arr = [];
while(gr_General.next()) {
    arr.push(gr_General.getValue('sys_id'));
}
gs.addInfoMessage('2 ' + arr);
for(var i = 0; i < 2; i++){
  var key = getRandomInt(6);
  
  var item = (arr[key]);
  if((arrNew.indexOf(item)) >= 0){
      i--;
  }
  else{
      arrNew.push(item);
    }
}
var gr_LWH = new GlideRecord('asmt_metric');
    gr_LWH.addQuery("category.name", 'PMI_LWH');
    gr_LWH.query();

var arr = [];
while(gr_LWH.next()) {
    arr.push(gr_LWH.getValue('sys_id'));
}
gs.addInfoMessage('3 ' + arr);
for(var i = 0; i < 2; i++){
  var key = getRandomInt(4);
  
  var item = (arr[key]);
  if((arrNew.indexOf(item)) >= 0){
      i--;
  }
  else{
      arrNew.push(item);
    }
}
for(var i = 0; i < 6; i++){
    // таблица тестов, отправляемых в AIN
        var ques = new GlideRecord('asmt_assessment_instance_question');
        ques.initialize();
        ques.instance = recResult;
        ques.source_id = "36cc0ddedb35d8101bfb264cd3961984"; //FSV test result
        ques.source_table = "asmt_metric_type"; 
        ques.metric = arrNew[i];
        ques.insert();
}
  gs.addInfoMessage('all ' + arrNew);

```


2. Написан скрипт на jelly js, выводящий итоговый результат:
```
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<g:macro_invoke macro="quiz_result_header" />
<div style="width: 800px; margin: 0 auto;">
    <g:evaluate object="true">
        var gr = new GlideAggregate('asmt_assessment_instance_question');
        gr.addQuery("instance.user", gs.getUserID());
		gr.addAggregate('COUNT');
		gr.groupBy('metric');
        gr.query();
        var i = 0,
            j = 0;
    </g:evaluate>

    <!--бежим по записям-->
    
    <j:while test="${gr.next()}">
           
		<g:evaluate var="jvar_row_qa" jelly="true">
            i++;
            i;
        </g:evaluate>
		
		<g:evaluate object="true">
			var gp = new GlideRecord('asmt_metric_definition');
			gp.addQuery("metric.name", gr.metric.name.getDisplayValue());
			gp.query();
		</g:evaluate>
		
		<!--Счетчик и вопрос.-->
				
		<p class="text-justify" style="padding: 30px 10px 10px; margin: 0; font-size: 20px;"> 
        ${jvar_row_qa}. ${gr.metric.question.getDisplayValue()} </p>
		
        <j:while test="${gp.next()}">
		
			<g:evaluate object="true">
				var gg = new GlideRecord('asmt_metric_result');
				gg.addQuery("instance.user", gs.getUserID());
				gg.addQuery("metric.name", gr.metric.name.getDisplayValue());
				gg.addQuery("actual_value", gp.value.getDisplayValue());
				gg.query();
                var item,
					result;
			</g:evaluate>

			<!--Если совпадений нет, то рассматриваем записи-->
			<j:if test="${gg.getRowCount() === 0}">
			<!--выделяем верный ответ если он не был выбран-->
				<j2:if test="${9 > gp.value.getDisplayValue()}">
					<div class="answer" style="position: relative; margin-bottom: 5px">
						<div class="left__icon" style="position: absolute; left: 10px; bottom: calc(50% - 17.5px)">
							<img src="circleEmpty.png"/>
						</div>  
						<div class="right__icon" style="padding-left: 50px;border: 1px green solid;">
							<p class="text-justify" style="margin: 0; padding: 10px; font-size: 14px;">${gp.display.getDisplayValue()}</p>
						</div>
					</div>
				</j2:if>
			<!--выводим оставшиеся ответы без стилей-->
				<j2:if test="${gp.value.getDisplayValue() > 9}">
					<div class="answer" style="position: relative; margin-bottom: 5px">
						<div class="left__icon" style="position: absolute; left: 10px; bottom: calc(50% - 17.5px)">
							<img src="circleEmpty.png"/>
						</div>  
						<div class="right__icon" style="padding-left: 50px;">
							<p class="text-justify" style="margin: 0; padding: 10px; font-size: 14px;">${gp.display.getDisplayValue()}</p>
						</div>
					</div>
				</j2:if>
			</j:if>
			<!--Есть совпадения-->
			<j:while test="${gg.next()}">
            	<!--неверный ответ пользователя-->
				<j:if test="${gg.actual_value.getDisplayValue() > 9}">
					<div class="answer" style="position: relative; margin-bottom: 5px">
                        <div class="left__icon" style="position: absolute; left: 10px; bottom: calc(50% - 17.5px)">
                            <img src="cross.png"/>
                        </div>  
                    	<div class="right__icon" style="padding-left: 50px;border: 1px red solid;">
                            <p class="text-justify" style="margin: 0; padding: 10px; font-size: 14px;">${gp.display.getDisplayValue()}</p>
                        </div>
                    </div>     
				</j:if>
				<!--верный ответ пользователя-->
				<j:if test="${4 > gg.actual_value.getDisplayValue()}">
					<!--Счетчик верных ответов добавляем +1б за стандартны вопрос-->
					<g:evaluate var="jvar_row_true" jelly="true">
						j++;
						j;
					</g:evaluate>
				</j:if>
				<j:if test="${9 > gg.actual_value.getDisplayValue()}">
					<g:evaluate var="jvar_row_true" jelly="true">
						j++;
						j;
					</g:evaluate>
					<div class="answer" style="position: relative; margin-bottom: 5px">
						<div class="left__icon" style="position: absolute; left: 10px; bottom: calc(50% - 17.5px)">
							<img src="circle.png"/>
						</div>  
						<div class="right__icon" style="padding-left: 50px;border: 1px green solid;">
							<p class="text-justify" style="margin: 0; padding: 10px; font-size: 14px;">${gp.display.getDisplayValue()}</p>
						</div>
					</div>
				</j:if>
			</j:while>
		</j:while>
    </j:while>
    <h3 class="text-center" style="padding: 60px 10px 10px;">Количество баллов: <b style='margin: 5px'> ${jvar_row_true}. </b> Проходной балл - <b style='margin: 5px'> 11 </b></h3>
</div>
<j:if test="${j > 10 }">
	<g:macro_invoke macro="quiz_result_footer_pos" />
	</j:if>
	<j:if test="${11 > j}">
	<g:macro_invoke macro="quiz_result_footer_neg" />
	</j:if>

</j:jelly>

```
