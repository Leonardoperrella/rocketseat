var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/Leonardoperrella');
xhr.send(null);


xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
        var json = JSON.parse(xhr.responseText)
        console.log(json['id']);

    }
}
