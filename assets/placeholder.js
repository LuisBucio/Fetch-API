let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUser');

btnUsers.addEventListener('click',() =>{
    let getUser = fetch('https://jsonplaceholder.typicode.com/users');
    getUser
        .then(resp => resp.json())
        .then(data => {
            data.forEach(user => {
                console.log(data);
                let parr = document.createElement('p');
                parr.textContent = user.name;
                divUsers.appendChild(parr);
            });
        }).catch(e => console.log(e))
})