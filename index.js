// Definir uma variavel com preco 
alert('Bem-vindo ao programa de calculo de parcelas!');
let preco = parseFloat(prompt('Informe o valor do produto (Use "." para casas decimais)'));

//Verificar sera a compra sera parcelada ou a vista 
let opcao = parseInt(prompt('(1) Pagamento á vista / (2) Parcelamento em até 12x sem juros'));

if(opcao == 2){
while (opcao == 2){
    preco = parseFloat(prompt('Informe o valor do produto (Use "." para casas decimais)'));
    let parcelas = parseInt(prompt('Informe a quantidade de parcelas que deseja pagar ate 12x'));
    console.log('Opções de parcelamento:');
    for (i = 1; i <= parcelas; i++) {
        let tabelaParcela = preco / i;
        console.log(`${i} x ${tabelaParcela.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
    }
    opcao = parseInt(prompt('(1) Sair do programa / (2) Calcular novamente'));
    }
    
} else{
    alert(`O pagamento á vista fica no valor de ${preco.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})}`);
}
alert('Você saiu do programa de calculo das parcelas!');



//Emprestimo 
alert('Bem-vindo ao programa de emprestimos!');
//Pedir que o usuario informe o valor do emprestimo desejado
//Calcular o valor do juros com 10%
let valor = parseFloat(prompt('Informe o valor desejado para o emprestimo:'));

let quantidadeParcelas = parseInt(prompt('Em quantas parcelas você deseja pagar?'));

if (quantidadeParcelas <= 12){
    let juros = (valor * 10)/100;
    let valorTotal = juros + valor;
    let valorParcela = valorTotal / quantidadeParcelas;
    console.log(valorTotal)
    console.log(`Valor total com juros: ${valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
    console.log('Tabela das parcelas com juros:');


    for (i = 1; i <= quantidadeParcelas; i++){
        console.log(`Parcela ${i} -> ${valorParcela.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

    } 
}else if (quantidadeParcelas <= 24){
    let juros = (valor * 20)/100;
    let valorTotal = juros + valor;
    let valorParcela = valorTotal / quantidadeParcelas;
    console.log(valorTotal)
    console.log(`Valor total com juros: ${valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
    console.log('Tabela das parcelas com juros:');


    for (i = 1; i <= quantidadeParcelas; i++){
        console.log(`Parcela ${i} -> ${valorParcela.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

    } 
}else{
    let juros = (valor * 35)/100;
    let valorTotal = juros + valor;
    let valorParcela = valorTotal / quantidadeParcelas;
    console.log(valorTotal)
    console.log(`Valor total com juros: ${valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
    console.log('Tabela das parcelas com juros:');


    for (i = 1; i <= quantidadeParcelas; i++){
        console.log(`Parcela ${i} -> ${valorParcela.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

    } 
}



// Criando uma tabuada 

alert('Bem-vindo ao programa de tabuada');
let opcaoTabuada = parseInt(prompt('(1) Verificar tabuada  (2) Sair do programa'));

let tabuada = 0;

while (opcaoTabuada == 1){
    let num = parseInt(prompt('Digite um numero para verificar a tabuada: '));

    for (i = 1; i <= 10; i++){
        tabuada = i * num;
        console.log(`${i} x ${num} = ${tabuada}`);
    }
    opcaoTabuada = parseInt(prompt('(1) Verificar uma nova tabuada  (2) Sair do programa'));
}

alert('Você saiu do programa!');



// Programa para exibir a media e soma a cada valor digitado 
alert('Bem-vindo ao programa de media e soma!');
let num1 = parseFloat(prompt('Digite o primeiro valor: '));
let soma = num1
let media = soma
let inicio = parseInt(prompt('(1) Digitar outro valor   (2) Finalizar o programa'));
let divisores = 2;

while (inicio == 1 ){
    let num2 = parseFloat(prompt('Digite outro valor: '));
    soma = soma + num2;
    alert(`A soma entre os valores digitados é ${soma}`);

    //Fazer com que uma variavel receba a quantidade de numeros digitados para podermos fazer a media
    for(i = 1; i > 0; i++){
        media = soma / divisores;
        alert(`A media entre os valores digitados é ${media}`);
        divisores = divisores + 1;
        break;
    }
    inicio = parseInt(prompt('(1) Continuar calculando   (2) Finalizar calculos'));
}

alert(`O programa foi finalizado com soma de: ${soma} e media de: ${media}`);