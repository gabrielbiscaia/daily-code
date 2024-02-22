const questionData = [
    {
        questionText:
        "<input id='input-answer' type='text' maxlength='7' spellcheck='false'>"+
        " o chuveiro estiver desligado, então ligue-o e tome banho.",
        correctAnswer: "se",
        correctFeedback: "<b>Correto</b>, pois <b>se</b> o chuveiro estiver desligado,"+
        " é necessário liga-lo para que assim eu possa tomar banho.",
        wrongFeedback:"<b>Não é bem isso</b>, pois preciso pensar que <b>se</b> "+
        "o chuveiro estiver desligado, é necessário liga-lo para que assim eu possa tomar banho.",
    },
    {
        questionText:
        "<pre>"+
        "<input id='input-answer' type='text' maxlength='5' spellcheck='false'>(chuveiro == 'desligado'){<br>"+
        "   entrar_no_banho('piter')<br>"+
        "   ligar_chuveiro();<br>"+
        "}"+
        "</pre>",
        correctAnswer:"if",
        correctFeedback: "nice",
        wrongFeedback: "miss",
    }
]

export { questionData };