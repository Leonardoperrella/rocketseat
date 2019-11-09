
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');


function buscaGitByName(){
  listElement.innerHTML = ''
  var msgElement = document.createElement('li');
  var msgText = document.createTextNode('Carregando...');
  msgElement.appendChild(msgText);
  listElement.appendChild(msgElement);
  axios.get('https://api.github.com/users/'+inputElement.value+'/repos?per_page=100&page=1')
    .then(function(response){
      repos = response['data']
      render(repos);
      
      
    })
    .catch(function(error){
      alert('Usuário não encontrado!')
    })
  };

function render(repos){
  listElement.innerHTML = ''
  for (repo of repos){
    var repoElement = document.createElement('li');
    var repoText = document.createTextNode(repo['name']);

    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
  }
}