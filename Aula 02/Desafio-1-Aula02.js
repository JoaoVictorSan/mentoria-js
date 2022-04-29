// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
    var resultado = a + b ;
    return resultado;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var resultado2 = soma(60,15) + 5;

// Qual o valor atualizado dessa variável?

console.log(resultado2);

// Declare uma nova variável, sem valor.

var vazio;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é: {VALOR}.
Onde VALOR é o novo valor da variável.
*/

function insere(conteudo){
    vazio = conteudo;
    var texto = "O valor da variavel agora é " + vazio;
    return(texto);
}

// Invoque a função criada acima.

insere(7);

// Qual o retorno da função? (Use comentários de bloco). 

/* o valor da variavel agora é 7 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string: Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function confere (d,e,f){
    if(d  === undefined || e  === undefined || f === undefined) {
        texto = "Preencha todos os valores corretamente!"
        return texto;
    }
    var multiplicacao = d * e * f;
    return multiplicacao + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.

confere(32, 23);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

confere(54, 53, 0);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 2

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function ver(arg1,arg2,arg3) {

    if(arg1 !== undefined && arg2 == undefined && arg3 == undefined){
        return arg1;
    } else if(arg1 !== undefined && arg2 !== undefined && arg3 == undefined) {
        return arg1 + arg2;
    } else if(arg1 !== undefined && arg2 !== undefined && arg3 !== undefined){
        return (arg1 + arg2)/arg3;
    } else if(arg1 == undefined && arg2 == undefined && arg3 == undefined){
        return false;
    } else{return null}
}
