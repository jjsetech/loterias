var numbersMega = [];
var numbersQuina = [];

// Gerador de números para Megasena.
function gerarNumerosMega() {
  numbersMega = [];
  for (i = 0; i < 6; i++) {
    var randomNumberMega = Math.random();
    randomNumberMega = Math.floor(randomNumberMega * 60) + 1;
    var checkDoubleMega = numbersMega.includes(randomNumberMega);

    if (checkDoubleMega === false) {
      numbersMega.push(randomNumberMega);
    } else {
      while (checkDoubleMega === true) {
        randomNumberMega = Math.random();
        randomNumberMega = Math.floor(randomNumberMega * 60) + 1;
        checkDoubleMega = numbersMega.includes(randomNumberMega);
        if (checkDoubleMega === false) {
          numbersMega.push(randomNumberMega);
        } else {
          return;
        }
      }
    }
  }
  numbersMega.sort(function(a, b) {
    return a - b
  });
  $(".tipo-de-jogo").text("Seus números para Megasena são:");
  $(".start-message").text(numbersMega.join(', '));
}

$(".btn-mega").click(function() {
  numbersMega = [];
  gerarNumerosMega();

});

// Gerador de números para Quina.
function gerarNumerosQuina() {
  numbersQuina = [];
  for (i = 0; i < 5; i++) {
    var randomNumberQuina = Math.random();
    randomNumberQuina = Math.floor(randomNumberQuina * 80) + 1;
    var checkDoubleQuina = numbersQuina.includes(randomNumberQuina);

    if (checkDoubleQuina === false) {
      numbersQuina.push(randomNumberQuina);
    } else {
      while (checkDoubleQuina === true) {
        randomNumberQuina = Math.random();
        randomNumberQuina = Math.floor(randomNumberQuina * 80) + 1;
        checkDoubleQuina = numbersQuina.includes(randomNumberQuina);
        if (checkDoubleQuina === false) {
          numbersQuina.push(randomNumberQuina);
        } else {
          return;
        }
      }
    }
  }
  numbersQuina.sort(function(a, b) {
    return a - b
  });
  $(".tipo-de-jogo").text("Seus números para Quina são:");
  $(".start-message").text(numbersQuina.join(', '));
}

$(".btn-quina").click(function() {
  numbersLoto = [];
  gerarNumerosQuina();

});
