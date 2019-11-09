function checaIdade(idade) {
  return new Promise(function(resolve, reject){
    if (idade > 18){
        setTimeout(function(){
          resolve("Maior que 18");
        }, 2000);
    } else{
        reject("Menor de de 18");
    }
  });
 }
 checaIdade(17)
  .then(function() {
  console.log("Maior que 18");
  })
  .catch(function() {
  console.log("Menor que 18");
  });



 