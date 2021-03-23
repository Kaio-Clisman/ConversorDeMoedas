function conversao() {
    let valorDolar = document.getElementById('valorDolar').value;
    let quantidadeDolar = document.getElementById('quantidadeDolar').value;

    valorDolar = parseFloat(valorDolar)
    quantidadeDolar = parseFloat(quantidadeDolar)
    let resultado = valorDolar * quantidadeDolar
    document.getElementById('resultado').innerText = `Valor em reais R$${resultado.toFixed(2)}`
}