function maiormenor() {
    let n1 = parseInt(prompt("digite o primeiro valor"));
    let n2 = parseInt(prompt("digite o segundo valor"));
    let n3 = parseInt(prompt("digite o terceiro valor"));
    if (!n1 || !n2 || !n3) {
        alert('Preencha todos os campos');
        return;
    }
    let maximo = Math.max(n1, n2, n3);
    let minimo = Math.min(n1, n2, n3);

    alert("maior numero é " + maximo);
    alert("menor numero é " + minimo);

}