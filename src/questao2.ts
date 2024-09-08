const stringInformada = "abacate";
let quantidade = 0;

const contaLetraA = (string: string): string => {
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "a") {
      quantidade++;
    }
  }

  return quantidade > 0
    ? `existem ${quantidade} letras A na string`
    : "não existem letras A na string";
};

const textoParaVerificar = contaLetraA(stringInformada);
console.log(textoParaVerificar);
