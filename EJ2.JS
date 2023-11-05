suma (2,2,1);

function suma (a,b,callback){
    let c = a +b;
    callback();
    }
    

    //¿Que es el tercer parámetro recibido?
// Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción

//¿En que casos es obligatorio desarrollar este tipo de funciones?
//Realizar un llamado a la función de ejemplo.
randomNumber(2);
function randomNumber(number) {
    return Math.floor(Math.random()*number);
    }
