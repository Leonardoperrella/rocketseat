var listElement = document.querySelector('tbody');
var totalNumb = document.querySelector('#linhaTotal span.totalNumb').textContent;
var list = ['Banana'];

const re = /[\d]+([,\d]+)?/;
//var element = document.querySelector('tbody tr:nth-child(1) td span.RvlUnit').textContent

//var new_element = re.exec(element);
//list.push(new_element);

//console.log(new_element[0]);


//console.log(document.querySelector('tbody'));
//console.log(document.querySelector('tbody tr:nth-child(1) td span.RvlUnit').textContent);

for (i = 1; i <= totalNumb; i++) {
  var codigo = document.querySelector('tbody tr:nth-child('+i+') td span.RCod').textContent; 
  var nomeItem = document.querySelector('tbody tr:nth-child('+i+') td span.txtTit').textContent;
  var valUnit = document.querySelector('tbody tr:nth-child('+i+') td span.RvlUnit').textContent;
  var quantidade = document.querySelector('tbody tr:nth-child('+i+') td span.Rqtd').textContent;
  var un = document.querySelector('tbody tr:nth-child('+i+') td span.RUN').textContent;
  var totalItem = document.querySelector('tbody tr:nth-child('+i+') td span.valor').textContent;
  codigo = re.exec(codigo);
  valUnit = re.exec(valUnit);
  quantidade = re.exec(quantidade);
  un = un.substring(4);
  
  //Codigo do Item
  console.log(codigo[0]);
  //Nome do item
  console.log(nomeItem);
  //Quantidade
  console.log(quantidade[0]);
  //Valor Unitário
  console.log(valUnit[0]);
  //Unidade
  console.log(un);
  //Valor Total do Item
  console.log(totalItem);
}

//var total = listElement.innerHTML
//console.log(listElement);
//console.log(totalNumb);

//console.log(document.querySelector('tbody tr:nth-child(2) td span.valor').textContent);
//console.log(document.querySelector('tbody'));
//console.log(document.getElementById('Item + 2'));


//let obj = document.querySelectorAll('tbody tr td span.valor');
//let obj = document.querySelectorAll('tbody tr');
//console.log("tipo: " + typeof obj);
//console.log("Quantidade: " +obj.length);

/*
for(let i of obj) {  
  //console.log(i.id);
  console.log(i);
}
*/
  
  
  //console.log(i.textContent);
  //i.style.color= "blue";


/*
document.querySelector("#element ul li:nth-child(2)").style.color = "blue";

document.querySelector("#element ul li:nth-child(2)").style.color = "blue";
<div id="element">
    <ul>
        <li> Item 1 </li>
        <li> Item 2 - Alvo </li>
        <li> Item 3 </li>
    </ul>
</div>
*/