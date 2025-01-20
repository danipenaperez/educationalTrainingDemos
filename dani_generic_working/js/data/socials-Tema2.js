

var options = [
    //Sentence Type question variations
    {   
        sentence:"[inputText] is the characteristic state of the [inputText] in a specific area over a long period of time.", 
        correctAnswer: "Climate is the characteristic state of the atmosphere in a specific area over a long period of time.", 
        timeout: 30, 
        explanation: "<b>Climate</b> is the characteristic state of the <b>atmosphere</b> in a specific area over a long period of time.",
        explanationExtended: "El clima es el estado (characteristic state) de la atmosfera en un determinado lugar (specified area) durante un largo(long) periodo de tiempo"
    },
    {
        sentence:"The elements for describing  the climate of an area are [inputText] and [inputText]", 
        correctAnswer: "The elements for describing  the climate of an area are temperature and precipitation", 
        timeout: 30, 
        explanation: "The elements for describing  the climate of an area are <b>temperature</b> and <b>precipitation</b>",
        explanationExtended: "Los elementos para describir el clima de un area son la temperatura y la precipitacion (cantidad de lluvia)"
    },
    {
        sentence:"Temperature is how [inputText] the air is. It is measured with a [selectOption| ,thermometer,gauge]. It is expressed in degrees Celsius (ºC).",
        correctAnswer: "Temperature: How warm the air is. It is measured with a thermometer. It is expressed in degrees Celsius (ºC).", 
        help: "measured: medir",
        timeout: 30, 
        explanation: "Temperature is how <b>warm<b/> the air is. It is measured with a <b>thermometer</b>. It is expressed in degrees Celsius (ºC).",
        explanationExtended:"La temperatura es como de cálido (warm) está el aire. Se mide (measured) con un termometro. Se expresa en grados (degrees) celsius ºC."
    },
    {
        sentence:"Temperature and precipitation are influenced by factors: Distance from [selectOption| ,sea,equator,altitude], proximity to the [selectOption| ,sea,equator,altitude] and [selectOption| ,sea,equator,altitude]", 
        correctAnswer: "Temperature and precipitation are influenced by factors: Distance from equator, proximity to the sea and altitude", 
        timeout: 30, 
        explanation: "Temperature and precipitation are influenced by factors:<br> <b>Distance from equator</b>,<br><b>proximity to the sea</b><br><b>altitude</b>.",
        explanationExtended:"La temperatura y la precipiacion estan influenciados por: la distancia al equador, la proximidad al mar y la altitud."
    },
    {
        sentence:"Temperature change in every season at: [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "Temperature change in every season at: temperature zones", 
        help: " season: estacion del año \n change: cambiar",
        timeout: 30, 
        explanation: "Temperature change in every season at: temperature zones.",
        explanationExtended:"En las Cold Zones(north and south poles) siempre hace frio, en la Hot zone (equator) siempre hace calor, por lo que la temperatura solo cambia en las Temperature Zones en cada estacion del año (<b>season</b>)."
    },
    {
        sentence:"The Sun's rays reach the Earth directly in this zone: [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "The Sun's rays reach the Earth directly in this zone: hot zones", 
        timeout: 30,
        help: " reach: alcanzar, llegar a \n rays: rayos", 
        explanation: "Los rayos del sol (Sun's rays) alcanzan (reach) la tierra (Earth)  directamente en la hot zone, es decir los rayos caen directamente, no caen de lado.  Por eso en estas zonas su <b>temperature is high (alta)</b>",
        explanationExtended:""
    },
    {
        sentence:"The Sun's rays reach the Earth indirectly in this zone: [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "The Sun's rays reach the Earth indirectly in this zone: cold zones", 
        timeout: 30, 
        explanation: "Los rayos del sol (Sun's rays) alcanzan (reach) la tierra (Earth) indirectamente en la cold zone, es decir los rayos caen indirectamente (caen de lado) por eso hace mas frio (cold), es decir su <b>temperature is low (baja)</b> ",
        explanationExtended:""
    },
    {
        sentence:"Regions between the polar circles and the tropics of Cancer and capricorn are : [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "Regions between the polar circles and the tropics of Cancer and capricorn are : temperature zones", 
        timeout: 30, 
        explanation: "Las regiones que estan entre los circulos polares (cold zones) y los tropicos de Cancer y Capricornio (hot zones) son las temperature zones..",
        explanationExtended:""
    },
    {
        sentence:"At night the warm air from the sea makes the temperature of the land [selectOption| ,cooler,warmer]", 
        correctAnswer: "At night the warm air from the sea makes the temperature of the land warmer", 
        timeout: 30, 
        explanation: "Por la noche (<b>nigth</b>) el aire calido (<b>warm air</b>) del mar (<b>sea</b>) hace que la temperatura de la tierra (<b>land</b>) sea mas calido (<b>warmer</b>)",
        explanationExtended:""
    },
    {
        sentence:"Mountains receive [selectOption| ,more,less] precipitation than lower areas", 
        correctAnswer: "Mountains receive more precipitation than lower areas", 
        help: " receive: recibir \n lower: bajas (zonas mas bajas de altitud)", 
        timeout: 30, 
        explanation: "<b>More</b> (más), <b>less</b> (menos). <b>lower</b>(mas bajas)",
        explanationExtended:"Las montañas reciben mas lluvia que las areas mas bajas"
    },
    {
        sentence:"Places at higher altitude have [selectOption| ,warmer,colder] temperatures", 
        correctAnswer: "Places at higher altitude have colder temperatures", 
        help: " warmer: calurosas \n colder: frias", 
        timeout: 30, 
        help: "higher: alta \n rays: rayos", 
        explanation: "<b>higher</b> (altas), <b>warmer</b> (calidas). <b>colder</b>(frias)",
        explanationExtended:"Lugares (<b>places</b>) a alta altitud tienen temperaturas mas frias"
    }
    
];
