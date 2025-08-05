function calcularSoma() {
    const numero1 = parseFloat(document.getElementById('num1').value);
    const numero2 = parseFloat(document.getElementById('num2').value);
  
    const soma = numero1 + numero2;
  
    document.getElementById('resultado').textContent = 'Resultado: ' + soma;
  }
  