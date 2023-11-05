function suma(){
    console.log('Se esta ejecutando Suma..');
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    console.log('El numero 1 es: ',input1);
    console.log('El numero 2 es: ',input2);
    var resultado= input1+input2;
    console.log("El resultado de la suma es: ",resultado);
    document.getElementById('resultado').innerHTML=resultado;
}


function resta(){
    console.log('Se esta ejecutando Resta..');
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    console.log('El numero 1 es: ',input1);
    console.log('El numero 2 es: ',input2);
    var resultado= input1-input2;
    console.log("El resultado de la resta es: ",resultado);
    document.getElementById('resultado').innerHTML=resultado;
}


function multiplicacion(){
    console.log('Se esta ejecutando Multiplicacion..');
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    console.log('El numero 1 es: ',input1);
    console.log('El numero 2 es: ',input2);
    var resultado= input1*input2;
    console.log("El resultado de la multiplicacion es: ",resultado);
    document.getElementById('resultado').innerHTML=resultado;
}


function division(){
    console.log('Se esta ejecutando Division..');
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    console.log('El numero 1 es: ',input1);
    console.log('El numero 2 es: ',input2);
    var resultado= input1/input2;
    console.log("El resultado de la division es: ",resultado);
    document.getElementById('resultado').innerHTML=resultado;
}

