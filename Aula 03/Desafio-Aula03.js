// Crie uma váriavel boolean e atribua o valor true, e usando operador ternário, verifique se é verdadeiro ou falso retornando em String "Verdadeiro" ou "Falso""
    var bool = true;
    var se = bool;

    bool === se ? "verdadeiro" : "falso";


//Agora crie uma váriavel chamada profissao e atribua uma profissão, e utilizando operador terário verifique se aquela profissao é boa ou não
    var profissao = "predero";
    var qualidade = profissao;

    profissao === qualidade ? "boa" : "ruim";
/*Crie duas váriaveis (primeiroNumero = 5, segundoNumero = 10) atribuindo um valor qualquer, e usando operador ternário verifique qual valor é maior e retorne em string:
- Primeiro núimero é maior;
- Segundo numero é maior;
*/
    var primeiroNumero = 11, segundoNumero=10;
    primeiroNumero > segundoNumero ? "Primeiro número é maior" : "Segundo número é maior";

/*
Crie uma função chamada diaDaSemana, com as seguintes característica:
- Declare uma váriavel dia que contem o número do dia e uma váriavel nome do dia quie contém o nome do dia
- Usando estrutura condicional switch, se o dia for 1, o dia da semana será `SEGUNDA`. Se o dia for 2, o dia da semana será `TERÇA-FEIRA` e assim por diante
- No final da função retorne a frase: "Hoje é: [NOME DO DIA]"
*/
    function diaDaSemana(valor) {
        switch (valor) {
            case 1:
                dia = "segunda"
                break;
            case 2:
                dia = "terça"
                break;
            case 3:
                dia = "quarta"
                break;
            case 4:
                dia = "quinta"
                break;
            case 5:
                dia = "sexta"
                break;
            case 6:
                dia = "sabado"
                break;
            case 7:
                dia = "domingo"
                break;
        
            default:
                dia = "Não foi informado um número correspondente a um dia da semana"
                break;
        }
        return("Hoje é: " + dia)
    }
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (#FFFFF - BRANCO) (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
    function convertToHex(cor) {
    var  hex = ""   
        switch (cor){
            case "vermelho":
                hex = "o hexadecimal para a " + cor + " é #FF0000"
                break;
            case "azul":
                hex = "o hexadecimal para a " + cor + " é #0000FF"
                break;
            case "branco":
                hex = "o hexadecimal para a " + cor + " é #FFFFF"
                break;
            case "verde":
                hex = "o hexadecimal para a " + cor + " é #008000"
                break;
            case "roxo":
                hex = "o hexadecimal para a " + cor + " é #A020F0"
                break;
            default:
                hex = "Não temos o equivalente hexadecimal para " + cor;
        }return(hex)
        
    }