alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//while significa enquanto basicamente uma condicao que so para de ser exucutada quando entregar o valor pedido
while (chute != numeroSecreto ){ //!= significa diferente
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto ) {
            alert (`O número secreto é menor que ${chute}.`);
        } else {
            alert (`O número secreto é maior que ${chute}.`);
        }
        // tentativas = tentativas = 1;
        tentativas++; 
    }
}
// É uma otimizacao do codigo mostrando se tentativas for > 1 aparecerar a palavra tentativas : e o else  ou o se nao , aparecerar tentativa operador ternário
let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${PalavraTentativa}.`);
