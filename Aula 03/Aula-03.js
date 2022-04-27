// ELSE
function exampleElse(A, B) {
  if (A === B) {
    return 'A é igual a B';
  } else {
    return 'A não é igual a B';
  }
}

// ELSE IF
function exampleElseIf(A, B, C) {
  if (A !== B) {
    return 'A é diferente de B';
  } else if (A !== B && A === C) {
    return 'A é diferente de B e A é igual a C';
  } else {
    return 'A não é igual a B e também não é igual a C';
  }
}

// CONDICIONAL TERNÁRIO
//SUBSTITIU O IF
condição ? true : false;

function funcIf(a, b) {
  if (a === b) {
    return 'A é igual B';
  }
}

function funcTernario(a, b) {
  a === b ? 'A é igual B' : 'A não é igual a B';
}

//OPERADOR VIRGULA
var a,
  b = 2,
  c;

function exemplo() {
  var x = 0;
  return (x += 1), x;
}

//SWITCH
function exemploSwitch(valor) {
  var resposta = '';
  switch (valor) {
    case 1: // case verifica tbm o tipo do parametro
      resposta = 'alpha';
      break;
    case 2:
      resposta = 'beta';
    case 3:
      resposta = 'gamma';
    default: //igual o else
      resposta =
        'Digite um número para de 1 á 3, para ver a ordem do Alfabeto Grego';
      break;
  }

  return resposta;
}
exemploSwitch(1);

/*Crie uma função chamada valorFruta com as seguintes características:
  - Usando estrutura condicional switch, verifique a fruta e define o preço, tabela de preços: 
    "laranja" - "R$3,50" 
    "maça" - "R$2,00" 
    "pêra" - "R$2,50" 
    "melancia" - "R$30,00" 
    "melão" - "R$15,00" 
  - Caso não tenha a fruta escrever a frase: "Não temos essa fruta no momento :("

*/
