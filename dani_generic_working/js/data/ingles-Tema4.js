

var options = [
    {   
        sentence_title:"Inventions",
        sentence:"The romans [selectOption| ,brought,built,enjoyed,explored,invented,said,sent,travelled,used,wore] roads", 
        correctAnswer: "The romans built roads", 
        timeout: 120, 
        help: " brought: traer, \n built: construir, \n enjoyed:disfrutar, \n explored: explorar, \n invented: inventar, \n said: decir, \n sent: enviar, \n travelled: viajar, \n used: usar, \n wore: vestir, \n invented: inventaron",
        explanation: "",
        explanationExtended: ""
    },
    {   
        sentence_title:"Inventions",
        sentence:"The romans [selectOption| ,brought,built,enjoyed,explored,invented,said,sent,travelled,used,wore] roads", 
        correctAnswer: "The romans built roads", 
        timeout: 120, 
        help: " brought: traer, \n built: construir, \n enjoyed:disfrutar, \n explored: explorar, \n invented: inventar, \n said: decir, \n sent: enviar, \n travelled: viajar, \n used: usar, \n wore: vestir, \n invented: inventaron",
        explanation: "",
        explanationExtended: "Build | Built | Built  : Construir"
    },
    {   
        sentence_title:"Inventions",
        sentence:"The romans [selectOption| ,brought,built,enjoyed,explored,invented,said,sent,travelled,used,wore] sports", 
        correctAnswer: "The romans enjoyed sports", 
        timeout: 120, 
        help: " brought: traer, \n built: construir, \n enjoyed:disfrutar, \n explored: explorar, \n invented: inventar, \n said: decir, \n sent: enviar, \n travelled: viajar, \n used: usar, \n wore: vestir, \n invented: inventaron",
        explanation: "",
        explanationExtended: ""
    },
    {   
        sentence_title:"Inventions",
        sentence:"The romans [selectOption| ,brought,built,enjoyed,explored,invented,said,sent,travelled,used,wore] long clothes", 
        correctAnswer: "The romans wore long clothes", 
        timeout: 120, 
        help: "clothes: vestidos, \n brought: traer, \n built: construir, \n enjoyed:disfrutar, \n explored: explorar, \n invented: inventar, \n said: decir, \n sent: enviar, \n travelled: viajar, \n used: usar, \n wore: vestir, \n invented: inventaron",
        explanation: "",
        explanationExtended: "wear wore worn : Vestir"
    },
    {   
        sentence_title:"Inventions",
        sentence:"Daniel [selectOption| ,brought,built,enjoyed,explored,invented,said,sent,travelled,used,wore] be careful to Marta", 
        correctAnswer: "Daniel said be careful to Marta", 
        timeout: 120, 
        help: " brought: traer, \n built: construir, \n enjoyed: disfrutar, \n explored: explorar, \n invented: inventar, \n said: decir, \n sent: enviar, \n travelled: viajar, \n used: usar, \n wore: vestir, \n invented: inventaron",
        explanation: "",
        explanationExtended: ""
    },

    //Sentencias con AGO

    {   
        sentence_title:"AGO (tiempo atras)",
        sentence:"Brigitte (viajar) [inputText] to Paris two years ago.", 
        correctAnswer: "Brigitte (viajar) travelled to Paris two years ago.", 
        timeout: 120, 
        help: " Mirate los verbos!!",
        explanation: "",
        explanationExtended: "Las frases se forman con el past simple + ago"
    },
    {   
        sentence_title:"AGO (tiempo atras)",
        sentence:"Brigitte (usar) [inputText] her arenero two hours [inputText].", 
        correctAnswer: "Brigitte (usar) used her arenero two hours ago.", 
        timeout: 120, 
        help: " Mirate los verbos!!",
        explanation: "",
        explanationExtended: "Las frases se forman con el past simple + ago"
    },
    {   
        sentence_title:"AGO (tiempo atras)",
        sentence:"Brigitte (usar) [inputText] her arenero two hours [inputText].", 
        correctAnswer: "Brigitte (usar) used her arenero two hours ago.", 
        timeout: 120, 
        help: " Mirate los verbos!!",
        explanation: "",
        explanationExtended: "Las frases se forman con el past simple + ago"
    },
    {   
        sentence_title:"AGO (tiempo atras)",
        sentence:"I (empezar) [inputText] to live in Guadarrama five [inputText].", 
        correctAnswer: "I (empezar) started to live in Guadarrama five years ago.", 
        timeout: 120, 
        help: " start: empezar",
        explanation: "",
        explanationExtended: "Las frases se forman con el past simple + ago"
    },
    {   
        sentence_title:"Vocabulary",
        sentence:"What is the meaning of frustrated? [selectOption| ,frustrado, orgulloso, triste].", 
        correctAnswer: "What is the meaning of frustrated? frustrado.", 
        timeout: 120, 
        help: " ",
        explanation: "Siempre se usan con el verbo feel (sentir), por ejemplo",
        explanationExtended: "I feel frustrated (me siento frustrado), <br> Rapuntzell felt frustrated (Rapunzel se sintió frustrada) "
    },
    {   
        sentence_title:"Vocabulary",
        sentence:"What is the meaning of proud? [selectOption| ,frustrado, orgulloso, triste].", 
        correctAnswer: "What is the meaning of proud? orgulloso.", 
        timeout: 120, 
        help: " ",
        explanation: "Siempre se usan con el verbo feel (sentir), por ejemplo",
        explanationExtended: "I feel orgulloso (me siento orgulloso), <br> Marta felt proud (Marta se sintió orgullosa) "
    },
    {   
        sentence_title:"Vocabulary",
        sentence:"What is the meaning of sad? [selectOption| ,frustrado, orgulloso,triste].", 
        correctAnswer: "What is the meaning of sad? triste.", 
        timeout: 120, 
        help: " ",
        explanation: "Siempre se usan con el verbo feel (sentir), por ejemplo",
        explanationExtended: "I feel sad (me siento triste), <br> Rapunzel felt sad (Rapunzel se sintió triste) "
    },
    {   
        sentence_title:"Giving options (dando opciones)",
        sentence:
        "<div style='text-align: left'>"+
        "Grandma: The bus is very late. Let's walk to the cinema.<br> "+
        "You:  [selectOption| ,I'm not sure about that (no estoy seguro), That sounds good (eso suena bien)]. It's a long way to walk. <br>"+
        "Grandad: [selectOption| ,I'm not sure about that (no estoy seguro), That sounds good (eso suena bien)]. It's a long way to walk."+
        "Grandma: Why don't we go to home to get our bikes?<br> "+
        "Grandad:  [selectOption| ,That's a good idea (eso es una buena idea), That's a great suggestion (es una gran idea), That sounds good (eso suena bien)]. We can ride our bikes to the cinema. <br>"+
        "You: I don't think that's [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien)]. We might be late if we go home first! Letś take a taxi instead. <br>"+ 
        "Grandad: I  [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien)] so. It's too expensive. <br>"+
        "You: [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien)] this?. We could walk the last part!. That way, it won be too expensive. <br>"+
        "Grandma: [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien), That's a good idea (eso es una gran idea)] this?. We could walk the last part!. That way, it won be too expensive. <br>"+
        "</div>"
        ,
        correctAnswer: 
        "Grandma: The bus is very late. Let's walk to the cinema.<br> "+
        "You:   That sounds good (eso suena bien). It's a long way to walk. <br>"+
        "Grandad: I'm not sure about that (no estoy seguro). It's a long way to walk."+
        "Grandma: Why don't we go to home to get our bikes?<br> "+
        "Grandad:  That's a good idea (eso es una buena idea). We can ride our bikes to the cinema. <br>"+
        "Grandad:  [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien)]. We can ride our bikes to the cinema. <br>"+
        "You: I don't think that's going to work. We might be late if we go home first! Letś take a taxi instead. <br>"+ 
        "Grandad: I  [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien)] so. It's too expensive. <br>"+
        "You: [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien)] this?. We could walk the last part!. That way, it won be too expensive. <br>"+
        "Grandma: [selectOption| ,I'm not sure about that (no estoy seguro), That's a great suggestion (es una gran idea), That sounds good (eso suena bien), That's a good idea (eso es una gran idea)] this?. We could walk the last part!. That way, it won be too expensive. <br>",
        timeout: 120, 
        help: "I'm not sure about that (no estoy seguro) \n No, I don't think so (no, no lo creo),\n No, I don't think so (no, no lo creo),\n That sounds good (eso suena bien), \n No, I don't think so (no, no lo creo), \n I don't think thatś going to work (No creo que vaya a funcionar) ",
        explanation: "Cuando se dan opciones en una pregunta, por ejemplo ¿quieres ver una pelicula?",
        explanationExtended: "Hay frases comunes que se usan, por ejemplo: <br> That sounds good (eso suena bien), <br> That is a great suggestion (eso es una gran idea)  "
    }
];
