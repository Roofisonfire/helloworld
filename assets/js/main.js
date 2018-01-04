cursor_var=1;
grandma_var=0;
farm_var=0;
factory_var=0;
mine_var=0;
shipment_var=0;
alchemy_lab_var=0;
portal_var=0;
time_machine_var=0;
antimatter_condenser_var=0;
var buy_ok=false;
var object_var=0;
itemr[0].item_list="Курсор";
itemr[1].item_list="Бабушка";
itemr[2].item_list="Ферма";
itemr[3].item_list="Фабрика";
itemr[4].item_list="Шахта";
itemr[5].item_list="Ракета";
itemr[6].item_list="Химическая Лаборатория";
itemr[7].item_list="Портал";
itemr[8].item_list="Машина Времени";
itemr[9].item_list="Конденсатор Антиматерии";
for(i=0;i<itemr.length;i++){
ii=(i+1);
itemr[i].cost_var=Math.round(10*ii*ii*ii*ii*ii);
itemr[i].attribute_var=Math.round(3*ii*ii*ii*0.3*2.1);
itemr[i].attribute_varible=Math.round(1*ii*ii*ii*0.3*2);
itemr[0].attribute_var=1;
itemr[0].attribute_varible=0;
itemr[i].getElementsByClassName("item_list")[0].textContent=itemr[i].item_list;
itemr[i].getElementsByClassName("cost")[0].textContent=itemr[i].cost_var;

itemr[i].getElementsByClassName("attribute")[0].textContent=itemr[i].attribute_var;
itemr[i].getElementsByClassName("second_attribute")[0].textContent=itemr[i].attribute_varible;
}
cookie=0;
click_damage=1;
click_second=0;
function cookie_set(){
cookie+=click_damage;
}
function redraw(){
setTimeout(function(){
cookies.textContent="Печенек: "+cookie;
second.textContent="Печенек в сек: "+click_second;
damager.textContent="Печенек за клик: "+click_damage;
cursor_obj.textContent="Курсор: "+cursor_var;
grandma_obj.textContent="Бабушка: "+grandma_var;
farm_obj.textContent="Ферма: "+farm_var;
factory_obj.textContent="Фабрика: "+factory_var;
mine_obj.textContent="Шахта: "+mine_var;
shipment_obj.textContent="Ракета: "+shipment_var;
alchemy_lab_obj.textContent="Химическая Лаборатория: "+alchemy_lab_var;
portal_obj.textContent="Портал: "+portal_var;
time_machine_obj.textContent="Машина Времени: "+time_machine_var;
antimatter_condenser_obj.textContent="Конденсатор Антиматерии: "+antimatter_condenser_var;
redraw();
},0)
}
redraw();
function buy(cost_value, attribute_value){
if (cookie>=cost_value) {
buy_ok=true;
cookie-=cost_value;
click_damage+=attribute_value;
}
}
function clicker(attribute_varible){
setTimeout(function(){
cookie+=attribute_varible;
clicker(attribute_varible);
},1000)
}