var verbsExplanationGroup1 = 
"<table border=1>"+
"<tr><th> Present (presente)</th><th>Past Simple </th><th>Past Participle </th><th>Traduccion</th></tr>" +
"<tr><td> Cost</td><td>cost</td><td>cost</td><td>costar</td></tr>" +
"<tr><td> Cut</td><td>cut</td><td>cut</td><td>cortar</td></tr>" +
"<tr><td> Hit</td><td>hit</td><td>hit</td><td>golpear</td></tr>" +
"<tr><td> Hurt</td><td>hurt</td><td>hurt</td><td>herir</td></tr>" +
"<tr><td> Let</td><td>let</td><td>let</td><td>dejar</td></tr>" +
"<tr><td> Put</td><td>put</td><td>put</td><td>Poner colocar</td></tr>" +
"<tr><td> Set</td><td>set</td><td>set</td><td>Poner fijar</td></tr>" +
"<tr><td> Shut</td><td>shut</td><td>shut</td><td>cerrar</td></tr>" +
"</table>";




var group1 = [
    //ask Type question variations
    {ask:".... | Cost | Cost | Construir  ", correctAnswer: "Cost", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Cost | .... | Cost | Construir", correctAnswer: "Cost", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Cost | Cost | .... | Construir", correctAnswer: "Cost", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Cost | Cost | Cost | ....", correctAnswer: "Construir", timeout: 45, explanation:verbsExplanationGroup1},
    
    {ask:".... | Cut | Cut | cortar  ", correctAnswer: "Cut", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Cut | .... | Cut | cortar", correctAnswer: "Cut", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Cut | Cut | .... | cortar", correctAnswer: "Cut", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Cut | Cut | Cut | ....", correctAnswer: "cortar", timeout: 45, explanation:verbsExplanationGroup1},

    {ask:".... | Hit | Hit | golpear  ", correctAnswer: "Hit", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Hit | .... | Hit | golpear", correctAnswer: "Hit", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Hit | Hit | .... | golpear", correctAnswer: "Hit", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Hit | Hit | Hit | ....", correctAnswer: "golpear", timeout: 45, explanation:verbsExplanationGroup1},

    {ask:".... | Hurt | Hurt | herir", correctAnswer: "Hurt", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Hurt | .... | Hurt | herir", correctAnswer: "Hurt", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Hurt | Hurt | .... | herir", correctAnswer: "Hurt", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Hurt | Hurt | Hurt | ....", correctAnswer: "herir", timeout: 45, explanation:verbsExplanationGroup1},

    {ask:".... | Let | Let | dejar", correctAnswer: "Let", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Let | .... | Let | dejar", correctAnswer: "Let", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Let | Let | .... | dejar", correctAnswer: "Let", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Let | Let | Let | ....", correctAnswer: "dejar", timeout: 45, explanation:verbsExplanationGroup1},

    {ask:".... | Put | Put | Poner colocar", correctAnswer: "Put", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Put | .... | Put | Poner colocar", correctAnswer: "Put", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Put | Put | .... | Poner colocar", correctAnswer: "Put", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Put | Put | Put | ....", correctAnswer: "Poner colocar", timeout: 45, explanation:verbsExplanationGroup1},
    
    {ask:".... | Set | Set | Poner fijar", correctAnswer: "Set", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Set | .... | Set | Poner fijar", correctAnswer: "Set", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Set | Set | .... | Poner fijar", correctAnswer: "Set", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Set | Set | Set | ....", correctAnswer: "Poner fijar", timeout: 45, explanation:verbsExplanationGroup1},

    {ask:".... | Shut | Shut | cerrar", correctAnswer: "Shut", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Shut | .... | Shut | cerrar", correctAnswer: "Shut", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Shut | Shut | .... | cerrar", correctAnswer: "Shut", timeout: 45, explanation:verbsExplanationGroup1},
    {ask:"Shut | Shut | Shut | ....", correctAnswer: "cerrar", timeout: 45, explanation:verbsExplanationGroup1}
    
];




var verbsExplanationGroup2 = 
"<table border=1>"+
"<tr><th> Present (presente)</th><th>Past Simple </th><th>Past Participle </th><th>Traduccion</th></tr>" +
"<tr><td> Build</td><td>built</td><td>built</td><td>Construir</td></tr>" +
"<tr><td> Burn</td><td>burnt</td><td>burnt</td><td>Quemar</td></tr>" +
"<tr><td> Learn</td><td>learnt</td><td>learnt</td><td>Aprender</td></tr>" +
"<tr><td> Lend</td><td>lent</td><td>lent</td><td>Prestar</td></tr>" +
"<tr><td> Send</td><td>sent</td><td>sent</td><td>Enviar</td></tr>" +
"<tr><td> Smell</td><td>smelt</td><td>smelt</td><td>Oler</td></tr>" +
"<tr><td> Spend</td><td>spent</td><td>spent</td><td>Gastar</td></tr>" +
"</table>";


var group2 = [
    //ask Type question variations
    {ask:".... | built | built | Construir  ", correctAnswer: "Build", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Build | .... | built | Construir", correctAnswer: "built", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Build | built | .... | Construir", correctAnswer: "built", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Build | built | built | ....", correctAnswer: "Construir", timeout: 45, explanation:verbsExplanationGroup2},
    
    {ask:".... | burnt | burnt | Quemar  ", correctAnswer: "Burn", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Burn | .... | burnt | Quemar", correctAnswer: "burnt", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Burn | burnt | .... | Quemar", correctAnswer: "burnt", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Burn | burnt | burnt | ....", correctAnswer: "Quemar", timeout: 45, explanation:verbsExplanationGroup2},

    {ask:".... | learnt | learnt | Aprender  ", correctAnswer: "Learn", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Learn | .... | learnt | Aprender", correctAnswer: "learnt", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Learn | learnt | .... | Aprender", correctAnswer: "learnt", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Learn | learnt | learnt | ....", correctAnswer: "Aprender", timeout: 45, explanation:verbsExplanationGroup2},

    {ask:".... | lent | lent | Prestar", correctAnswer: "Lend", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Lend | .... | lent | Prestar", correctAnswer: "lent", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Lend | lent | .... | Prestar", correctAnswer: "lent", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Lend | lent | lent | ....", correctAnswer: "Prestar", timeout: 45, explanation:verbsExplanationGroup2},

    {ask:".... | sent | sent | Enviar", correctAnswer: "Send", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Send | .... | sent | Enviar", correctAnswer: "sent", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Send | sent | .... | Enviar", correctAnswer: "sent", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Send | sent | sent | ....", correctAnswer: "Enviar", timeout: 45, explanation:verbsExplanationGroup2},

    {ask:".... | smelt | smelt | Oler", correctAnswer: "Smell", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Smell | .... | smelt | Oler", correctAnswer: "smelt", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Smell | smelt | .... | Oler", correctAnswer: "smelt", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Smell | smelt | smelt | ....", correctAnswer: "Oler", timeout: 45, explanation:verbsExplanationGroup2},
    
    {ask:".... | spent | spent | Gastar", correctAnswer: "Spend", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Spend | .... | spent | Gastar", correctAnswer: "spent", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Spend | spent | .... | Gastar", correctAnswer: "spent", timeout: 45, explanation:verbsExplanationGroup2},
    {ask:"Spend | spent | spent | ....", correctAnswer: "Gastar", timeout: 45, explanation:verbsExplanationGroup2}
    
];


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
options = options.concat(group1);
options = options.concat(group2);
options = options.concat(group3);
options = options.concat(group4)
