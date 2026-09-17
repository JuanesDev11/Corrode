function imc(){
    let n1 = parseFloat(document.getElementById('estatura').value) || 0;
    let n2 = parseFloat(document.getElementById('peso').value) || 0;

    let imc = n2 / (n1 * n1);


    let estado = '';

    if(imc < 18.5){
        estado = 'Bajo Peso';
    }else if(imc >= 18.5 && imc < 25){
        estado = 'Normal';
    }else if(imc >= 25 && imc < 30){
        estado = 'Sobrepeso';
    }else if(imc >= 30 && imc < 35){
        estado = 'Obesidad';
    }else if(imc >= 30 && imc < 35){
        estado = 'Obesidad II';
    }else if(imc >= 30 && imc < 35){
        estado = 'Traigan una grúa';
    }

    document.getElementById('Resultado').innerText =`Resultado: ${imc}, ${estado}`;

}