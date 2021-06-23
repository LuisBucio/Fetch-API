/*Hace peticiones HTTP, solicita información a otra aplicación*/
//Se liga la pagina que vamos a utilizar
//let apiFetch = fetch('https://api.thecatapi.com/v1/images/search');

//Debemos ligar el boton
let button = document.querySelector('#button');
button.addEventListener('click', ()=>{
    let apiFetch = fetch('https://api.thecatapi.com/v1/images/search'); // se cambía a esta linea
    apiFetch
//Lo que se ejecuta después de la respuesta, se transforma en tipo JSON para usar el JavaScript
.then(resp => resp.json())
//se devuelve otra promesa ya con los datos obtenidos
.then(data =>{
    let cat = document.querySelector('#cat');
    //esta es la url dinamica
    cat.src = data[0].url;
    console.log(data[0].url);
     //el .catch es donde caen los errores de las promesas
 }).catch(e => console.log(e))

})