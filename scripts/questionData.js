const questionData = [
    {
        questionText:
        "<input id='input-answer' type='text' maxlength='8' spellcheck='false'>"+
        " o chuveiro estiver desligado, então ligue-o e tome banho.",
        correctAnswer: "se",
        correctFeedback: "<b>Correto</b>, pois <b>se</b> o chuveiro estiver desligado,"+
        " é necessário liga-lo para que assim eu possa tomar banho.",
        wrongFeedback:"<b>Não é bem isso</b>, pois preciso pensar que <b>se</b> "+
        "o chuveiro estiver desligado, é necessário liga-lo para que assim eu possa tomar banho.",
    },
    {
        questionText:
        "<input id='input-answer' type='text' maxlength='8' spellcheck='false'>"+
        " tiver água na chaleira, desepeje-a no filtro.",
        correctAnswer: "enquanto",
        correctFeedback: "<b>Correto</b>, pois <b>enquanto</b> tiver água na chaleira para passar o café,"+
        " você deve despeja-la no filtro.",
        wrongFeedback:"<b>Não é isso</b>, o <b>laço de repetição</b> a ser usado aqui é o <b>enquanto</b>, pois"+
        " <b>enquanto</b> tiver água na chaleira, despeja-la no filtro para poder passar café.",
    },
    {
        questionText:
        "<pre>"+
        "<input id='input-answer' type='text' maxlength='8' spellcheck='false'>(filtro == 'cheio'){<br>"+
        "   pararDeDespejarAgua();<br>"+
        "}"+
        "</pre>",
        correctAnswer:"if",
        correctFeedback: "<b>Perfeito!</b> Agora vou tomar o meu café.",
        wrongFeedback: "<b>Não</b>... nesse caso utilizar uma <b>estrutura condicional</b> na <b>linguagem C</b> como o <b>if</b>."+
        " Mas tudo bem, agora vou tomar meu café.",
    },
    {
        questionText:
        "<input id='input-answer' type='text' maxlength='8' spellcheck='false' style='font-size: 24px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'>",
        correctAnswer:"pilha",
        correctFeedback: "<b>Exatamente</b>, a louça lembra muito a estrutura de <b>pilhas</b>,"+
        " pois, se eu empilhei pratos, eu sempre tenho que desempilhar o prato de cima para lavar.",
        wrongFeedback: "Na real <b>não lembra muito</b> as filas, pois assim que eu empilho um prato no topo, eu não desempilho o prato da base..."+
        " eu desempilho o prato do topo, assim como nas <b>pilhas</b>.",
    },
    {
        questionText:
        "<pre>"+
        "<input id='input-answer' type='text' maxlength='6' spellcheck='false'>(cor_do_sinal){<br>"+
        "   <input id='input-answer2' type='text' maxlength='15' spellcheck='false' style='width: 180px;text-align: left;'><br>"+
        "       carro(parar);<br>"+
        "   case 'amarelo'<br>"+
        "       carro(atencao);<br>"+
        "   case 'verde'<br>"+
        "       carro(acelerar);<br>"+
        "}"+
        "</pre>",
        correctAnswer:"switch",
        correctAnswer2:"case 'vermelho'",
        correctFeedback: "<b>Exatamente!</b> <b>Caso</b> o sinal esteja vermelho pare, <b>caso</b> esteja amarelo tenha atenção, <b>caso</b> esteja verde acelere!",
        wrongFeedback: "<b>Errado</b>... devemos utilizar o <b>switch</b> case da <b>linguagem C</b>, ficaria algo assim:"+
        " <b>Caso</b> o sinal esteja vermelho pare, <b>caso</b> esteja amarelo tenha atenção, <b>caso</b> esteja verde acelere!",
    },
        {
        questionText:
        "<input id='input-answer' type='text' maxlength='8' spellcheck='false' style='font-size: 24px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'>",
        correctAnswer:"fila",
        correctFeedback: "Não importa se essa <b>fila</b> ta grande, pois em uma fila o primeiro que chega é o primeiro que sai,"+
        " como somos os últimos teremos que esperar um pouco.",
        wrongFeedback: "Não acredito que seja <b>pilha</b> pois se fosse, assim que entrássemos seriamos os primeiros a saírem."+
        " Já em uma <b>fila</b> o primeiro que chega é o último que sai, como somos os últimos teremos que esperar um pouco.",
    },
]

export { questionData };