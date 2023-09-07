let boton = document.getElementById('boton');
let edad = document.getElementById('edad').value;
let mayor = document.getElementById('mayor').value;

function calc(){
    if(edad <18){

        alert('es menor!!!'& edad);

        }
        else{
            alert('es mayor!!!');
        }
    }

    boton.addEventListener('click',calc,true);