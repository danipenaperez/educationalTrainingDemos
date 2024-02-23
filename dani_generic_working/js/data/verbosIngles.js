var verbsExplanation = 
"<table border=1>"+
"<tr><th> Present (presente)</th><th>Past Simple </th><th>Past Participle </th><th>Traduccion</th></tr>" +
"<tr><td> dream</td><td>dreamt</td><td>dreamt</td><td>soñar</td></tr>" +
"<tr><td> feel</td><td>felt</td><td>felt</td><td>sentir</td></tr>" +
"<tr><td> leave</td><td>left</td><td>left</td><td>dejar / partir / salir</td></tr>" +
"<tr><td> mean</td><td>meant</td><td>meant</td><td>significar</td></tr>" +
"<tr><td> meet</td><td>met</td><td>met</td><td>Quedar conocer</td></tr>" +
"</table>";



var options = [
    //ask Type question variations
    {ask:".... | Dreamt | Dreamt| Soñar  ", correctAnswer: "Dream", timeout: 30, explanation:verbsExplanation},
    {ask:"Dream | .... | Dreamt | Soñar", correctAnswer: "Dreamt", timeout: 30, explanation:verbsExplanation},
    {ask:"Dream | Dreamt | .... | Soñar", correctAnswer: "Dreamt", timeout: 30, explanation:verbsExplanation},
    {ask:"Dream | Dreamt | Dreamt | ....", correctAnswer: "Soñar", timeout: 30, explanation:verbsExplanation},
    
    {ask:".... | Felt | Felt | Sentir  ", correctAnswer: "Feel", timeout: 30, explanation:verbsExplanation},
    {ask:"Feel | .... | Felt | Sentir", correctAnswer: "Felt", timeout: 30, explanation:verbsExplanation},
    {ask:"Feel | Felt | .... | Sentir", correctAnswer: "Felt", timeout: 30, explanation:verbsExplanation},
    {ask:"Feel | Felt | Felt | ....", correctAnswer: "Sentir", timeout: 30, explanation:verbsExplanation},

    {ask:".... | Meant | Meant | significar  ", correctAnswer: "Mean", timeout: 30, explanation:verbsExplanation},
    {ask:"Mean | .... | Meant | significar", correctAnswer: "Meant", timeout: 30, explanation:verbsExplanation},
    {ask:"Mean | Meant | .... | significar", correctAnswer: "Meant", timeout: 30, explanation:verbsExplanation},
    {ask:"Mean | Meant | Meant | ....", correctAnswer: "significar", timeout: 30, explanation:verbsExplanation},

    {ask:".... | left | left | dejar partir salir", correctAnswer: "Leave", timeout: 30, explanation:verbsExplanation},
    {ask:"Leave | .... | left | dejar partir salir", correctAnswer: "left", timeout: 30, explanation:verbsExplanation},
    {ask:"Leave | left | .... | dejar partir salir", correctAnswer: "left", timeout: 30, explanation:verbsExplanation},
    {ask:"Leave | left | left | ....", correctAnswer: "dejar partir salir", timeout: 30, explanation:verbsExplanation},
    
    {ask:".... | met | met | Quedar Conocer", correctAnswer: "Meet", timeout: 30, explanation:verbsExplanation},
    {ask:"Meet | .... | met | Quedar Conocer", correctAnswer: "met", timeout: 30, explanation:verbsExplanation},
    {ask:"Meet | met | .... | Quedar Conocer", correctAnswer: "met", timeout: 30, explanation:verbsExplanation},
    {ask:"Meet | met | met | ....", correctAnswer: "Quedar conocer", timeout: 30, explanation:verbsExplanation},

];

