const comenzarJuego = document.querySelector('.btn');
const sectionPrincipal = document.querySelector('section');

function numAleatorio(){
    let numAleatorio = Math.floor(Math.random()*50);
    console.log(numAleatorio);

    sectionPrincipal.removeChild(sectionPrincipal.children[0]);


    let parrafoIngreseValor = document.createElement('p');
    parrafoIngreseValor.innerHTML = 'Ingrese el valor para comprobar si adivinó o no';
    parrafoIngreseValor.className = 'lead fs-2 text-danger text-center ';
    sectionPrincipal.appendChild(parrafoIngreseValor);

    let input = document.createElement('input');
    input.className = 'form-control w-50 shadow rounded border'
    sectionPrincipal.appendChild(input);

    let btnAdivinar = document.createElement('button');
    btnAdivinar.innerHTML = 'Enviar';
    btnAdivinar.className = 'btn btn-warning';
    sectionPrincipal.appendChild(btnAdivinar);

}


comenzarJuego.addEventListener('click', numAleatorio);