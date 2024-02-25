var verbsExplanationGroup3 = 
"<table border=1>"+
"<tr><th> Present (presente)</th><th>Past Simple </th><th>Past Participle </th><th>Traduccion</th></tr>" +
"<tr><td> get</td><td>got</td><td>got</td><td>Obtener</td></tr>" +
"<tr><td> keep</td><td>kept</td><td>kept</td><td>Guardar</td></tr>" +
"<tr><td> light</td><td>lit</td><td>lit</td><td>Encender</td></tr>" +
"<tr><td> lose</td><td>lost</td><td>lost</td><td>Perder</td></tr>" +
"<tr><td> shoot</td><td>shot</td><td>shot</td><td>Disparar</td></tr>" +
"<tr><td> sit</td><td>sat</td><td>sat</td><td>Sentarse</td></tr>" +
"<tr><td> sleep</td><td>slept</td><td>slept</td><td>Dormir</td></tr>" +
"</table>";



var group3 = [
    //ask Type question variations
    {ask:".... | Got | Got | Obtener  ", correctAnswer: "Get", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"Get | .... | Got | Soñar", correctAnswer: "Got", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"Get | Got | .... | Soñar", correctAnswer: "Got", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"Get | Got | Got | ....", correctAnswer: "Obtener", timeout: 45, explanation:verbsExplanationGroup3},
    
    {ask:".... | kept | kept | Guardar  ", correctAnswer: "keep", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"keep | .... | kept | Guardar", correctAnswer: "kept", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"keep | kept | .... | Guardar", correctAnswer: "kept", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"keep | kept | kept | ....", correctAnswer: "Guardar", timeout: 45, explanation:verbsExplanationGroup3},

    {ask:".... | lit | lit | Encender  ", correctAnswer: "light", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"light | .... | lit | Encender", correctAnswer: "lit", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"light | lit | .... | Encender", correctAnswer: "lit", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"light | lit | lit | ....", correctAnswer: "Encender", timeout: 45, explanation:verbsExplanationGroup3},

    {ask:".... | lost | lost | Perder", correctAnswer: "lose", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"lose | .... | lost | Perder", correctAnswer: "lost", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"lose | lost | .... | Perder", correctAnswer: "lost", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"lose | lost | lost | ....", correctAnswer: "Perder", timeout: 45, explanation:verbsExplanationGroup3},
    
    
    {ask:".... | shot | shot | Disparar", correctAnswer: "shoot", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"shoot | .... | shot | Disparar", correctAnswer: "shot", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"shoot | shot | .... | Disparar", correctAnswer: "shot", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"shoot | shot | shot | ....", correctAnswer: "Disparar", timeout: 45, explanation:verbsExplanationGroup3},

    
    {ask:".... | sat | sat | Sentarse", correctAnswer: "sit", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"sit | .... | sat | Sentarse", correctAnswer: "sat", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"sit | sat | .... | Sentarse", correctAnswer: "sat", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"sit | sat | sat | ....", correctAnswer: "Sentarse", timeout: 45, explanation:verbsExplanationGroup3},


    {ask:".... | slept | slept | Dormir", correctAnswer: "sleep", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"sleep | .... | slept | Dormir", correctAnswer: "slept", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"sleep | slept | .... | Dormir", correctAnswer: "slept", timeout: 45, explanation:verbsExplanationGroup3},
    {ask:"sleep | slept | slept | ....", correctAnswer: "Dormir", timeout: 45, explanation:verbsExplanationGroup3}
];

var verbsExplanationGroup4 = 
"<table border=1>"+
"<tr><th> Present (presente)</th><th>Past Simple </th><th>Past Participle </th><th>Traduccion</th></tr>" +
"<tr><td> dream</td><td>dreamt</td><td>dreamt</td><td>soñar</td></tr>" +
"<tr><td> feel</td><td>felt</td><td>felt</td><td>sentir</td></tr>" +
"<tr><td> leave</td><td>left</td><td>left</td><td>dejar / partir / salir</td></tr>" +
"<tr><td> mean</td><td>meant</td><td>meant</td><td>significar</td></tr>" +
"<tr><td> meet</td><td>met</td><td>met</td><td>Quedar conocer</td></tr>" +
"</table>";



var group4 = [
    //ask Type question variations
    {ask:".... | Dreamt | Dreamt| Soñar  ", correctAnswer: "Dream", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Dream | .... | Dreamt | Soñar", correctAnswer: "Dreamt", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Dream | Dreamt | .... | Soñar", correctAnswer: "Dreamt", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Dream | Dreamt | Dreamt | ....", correctAnswer: "Soñar", timeout: 45, explanation:verbsExplanationGroup4},
    
    {ask:".... | Felt | Felt | Sentir  ", correctAnswer: "Feel", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Feel | .... | Felt | Sentir", correctAnswer: "Felt", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Feel | Felt | .... | Sentir", correctAnswer: "Felt", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Feel | Felt | Felt | ....", correctAnswer: "Sentir", timeout: 45, explanation:verbsExplanationGroup4},

    {ask:".... | Meant | Meant | significar  ", correctAnswer: "Mean", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Mean | .... | Meant | significar", correctAnswer: "Meant", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Mean | Meant | .... | significar", correctAnswer: "Meant", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Mean | Meant | Meant | ....", correctAnswer: "significar", timeout: 45, explanation:verbsExplanationGroup4},

    {ask:".... | left | left | dejar partir salir", correctAnswer: "Leave", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Leave | .... | left | dejar partir salir", correctAnswer: "left", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Leave | left | .... | dejar partir salir", correctAnswer: "left", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Leave | left | left | ....", correctAnswer: "dejar partir salir", timeout: 45, explanation:verbsExplanationGroup4},
    
    {ask:".... | met | met | Quedar Conocer", correctAnswer: "Meet", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Meet | .... | met | Quedar Conocer", correctAnswer: "met", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Meet | met | .... | Quedar Conocer", correctAnswer: "met", timeout: 45, explanation:verbsExplanationGroup4},
    {ask:"Meet | met | met | ....", correctAnswer: "Quedar conocer", timeout: 45, explanation:verbsExplanationGroup4}

];


var options = [];
options = options.concat(group3);
options = options.concat(group4)
