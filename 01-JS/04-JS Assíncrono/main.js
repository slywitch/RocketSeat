// var minhaPromisse = function() {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         //xhr.open('GET', 'https://superheroapi.com/api/10222311201191449/265');
//         xhr.open('GET', 'https://api.github.com/users/diego3g');
//         xhr.send();

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro na requisição');
//                 }    
//             }
//         }
//     });
// }

// minhaPromisse()
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.warn(error);
//     });

axios.get('https://api.github.com/users/diego3g')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });