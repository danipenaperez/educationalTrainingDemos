

var options = [
    //Sentence Type question variations
    {   
        sentence:"[inputText] is the characteristic state of the [inputText] in a specific area over a long period of time.", 
        correctAnswer: "Climate is the characteristic state of the atmosphere in a specific area over a long period of time.", 
        timeout: 120, 
        explanation: "<b>Climate</b> is the characteristic state of the <b>atmosphere</b> in a specific area over a long period of time.",
        explanationExtended: "El clima es el estado (characteristic state) de la atmosfera en un determinado lugar (specified area) durante un largo(long) periodo de tiempo"
    },
    {
        sentence:"The elements for describing  the climate of an area are [inputText] and [inputText]", 
        correctAnswer: "The elements for describing  the climate of an area are temperature and precipitation", 
        timeout: 120, 
        explanation: "The elements for describing  the climate of an area are <b>temperature</b> and <b>precipitation</b>",
        explanationExtended: "Los elementos para describir el clima de un area son la temperatura y la precipitacion (cantidad de lluvia)"
    },
    {
        sentence:"Temperature is how [inputText] the air is. It is measured with a [selectOption| ,thermometer,gauge]. It is expressed in degrees Celsius (ºC).",
        correctAnswer: "Temperature: How warm the air is. It is measured with a thermometer. It is expressed in degrees Celsius (ºC).", 
        help: "measured: medir",
        timeout: 120, 
        explanation: "Temperature is how <b>warm<b/> the air is. It is measured with a <b>thermometer</b>. It is expressed in degrees Celsius (ºC).",
        explanationExtended:"La temperatura es como de cálido (warm) está el aire. Se mide (measured) con un termometro. Se expresa en grados (degrees) celsius ºC."
    },
    {
        sentence:"Temperature and precipitation are influenced by factors: Distance from [selectOption| ,sea,equator,altitude], proximity to the [selectOption| ,sea,equator,altitude] and [selectOption| ,sea,equator,altitude]", 
        correctAnswer: "Temperature and precipitation are influenced by factors: Distance from equator, proximity to the sea and altitude", 
        timeout: 120, 
        explanation: "Temperature and precipitation are influenced by factors:<br> <b>Distance from equator</b>,<br><b>proximity to the sea</b><br><b>altitude</b>.",
        explanationExtended:"La temperatura y la precipiacion estan influenciados por: la distancia al equador, la proximidad al mar y la altitud."
    },
    {
        sentence:"Temperature change in every season at: [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "Temperature change in every season at: temperature zones", 
        help: " season: estacion del año \n change: cambiar",
        timeout: 120, 
        explanation: "Temperature change in every season at: temperature zones.",
        explanationExtended:"En las Cold Zones(north and south poles) siempre hace frio, en la Hot zone (equator) siempre hace calor, por lo que la temperatura solo cambia en las Temperature Zones en cada estacion del año (<b>season</b>)."
    },
    {
        sentence:"The Sun's rays reach the Earth directly in this zone: [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "The Sun's rays reach the Earth directly in this zone: hot zones", 
        timeout: 120,
        help: " reach: alcanzar, llegar a \n rays: rayos", 
        explanation: "Los rayos del sol (Sun's rays) alcanzan (reach) la tierra (Earth)  directamente en la hot zone, es decir los rayos caen directamente, no caen de lado.  Por eso en estas zonas su <b>temperature is high (alta)</b>",
        explanationExtended:""
    },
    {
        sentence:"The Sun's rays reach the Earth indirectly in this zone: [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "The Sun's rays reach the Earth indirectly in this zone: cold zones", 
        timeout: 120, 
        explanation: "Los rayos del sol (Sun's rays) alcanzan (reach) la tierra (Earth) indirectamente en la cold zone, es decir los rayos caen indirectamente (caen de lado) por eso hace mas frio (cold), es decir su <b>temperature is low (baja)</b> ",
        explanationExtended:""
    },
    {
        sentence:"Regions between the polar circles and the tropics of Cancer and capricorn are : [selectOption| ,cold,temperature,hot] zones", 
        correctAnswer: "Regions between the polar circles and the tropics of Cancer and capricorn are : temperature zones", 
        timeout: 120, 
        explanation: "Las regiones que estan entre los circulos polares (cold zones) y los tropicos de Cancer y Capricornio (hot zones) son las temperature zones..",
        explanationExtended:""
    },
    {
        sentence:"At night the warm air from the sea makes the temperature of the land [selectOption| ,cooler,warmer]", 
        correctAnswer: "At night the warm air from the sea makes the temperature of the land warmer", 
        timeout: 120, 
        explanation: "Por la noche (<b>nigth</b>) el aire calido (<b>warm air</b>) del mar (<b>sea</b>) hace que la temperatura de la tierra (<b>land</b>) sea mas calido (<b>warmer</b>)",
        explanationExtended:""
    },
    {
        sentence:"Mountains receive [selectOption| ,more,less] precipitation than lower areas", 
        correctAnswer: "Mountains receive more precipitation than lower areas", 
        help: " receive: recibir \n lower: bajas (zonas mas bajas de altitud)", 
        timeout: 120, 
        explanation: "<b>More</b> (más), <b>less</b> (menos). <b>lower</b>(mas bajas)",
        explanationExtended:"Las montañas reciben mas lluvia que las areas mas bajas"
    },
    {
        sentence:"Places at higher altitude have [selectOption| ,warmer,colder] temperatures", 
        correctAnswer: "Places at higher altitude have colder temperatures", 
        help: " warmer: calurosas \n colder: frias", 
        timeout: 120, 
        explanation: "<b>higher</b> (altas), <b>warmer</b> (calidas). <b>colder</b>(frias)",
        explanationExtended:"Lugares (<b>places</b>) a alta altitud tienen temperaturas mas frias"
    },


    {
        sentence:"Typical Mediterranean (coasts) has [selectOption| ,mild,cold] temperatures (10º-25º) and [selectOption| ,high,low] precipitation", 
        correctAnswer: "Typical Mediterranean (coasts) has mild temperatures (10º-25º) and high precipitation", 
        timeout: 120, 
        help: "mild: medias (10º-25º) \n cold: frias", 
        explanation: "Typical Mediterranea esta en la costa, por eso su temperatura es media todo el año pero llueve mucho(high)",
        explanationExtended:""
    },
    {
        sentence:"[selectOption| ,Typical,Inland, Dry] Mediterranean has cold winters (4º-24º), hot summer and mild precipitation (400 l/m)", 
        correctAnswer: "Inland Mediterranean has cold winters (4º-24º), hot summer and mild precipitation (400 l/m)", 
        timeout: 120, 
        help: "Typical: costas \n Inland: peninsula \n Dry: peninsula sur (andalucia) ", 
        explanation: "Inland es dentro de la peninsula, y ahi tenemos inviernos frios, veranos calurosos y llueve normal",
        explanationExtended:""
    },
    {
        sentence:"[selectOption| ,Typical,Inland, Dry] Mediterranean has high temperatures (45º) and low precipitation (200 l/m)", 
        correctAnswer: "Dry Mediterranean has high temperatures (45º) and low precipitation (200 l/m)", 
        timeout: 120, 
        help: "Typical: costas \n Inland: peninsula \n Dry: peninsula sur (andalucia) ", 
        explanation: "Dry siginifica seco, por lo que no llueve mucho y la temperatura es alta",
        explanationExtended:""
    }


    ,
    {
        sentence:"Subtropical Climate have [selectOption| ,high,mild,low] temperatures and [selectOption| ,high,mild,low] precipitation", 
        correctAnswer: "Subtropical Climate have low temperatures and low precipitation", 
        timeout: 120, 
        help: "Subtropical: islas canarias ", 
        explanation: "Las islas canarias estan cerca del Equator por eso hace mucho calor y llueve poco",
        explanationExtended:""
    }

    ,
    {
        sentence:"Mountain Climate have [selectOption| ,high,mild,low] temperatures more altitude", 
        correctAnswer: "Mountain Climate have low temperatures more altitude", 
        timeout: 120, 
        help: "More altitude: mayor altitud ", 
        explanation: "Cuanto mas alto estamos de la montaña mas frio hace.",
        explanationExtended:"Cuando hace frio decimos que la temperatura es baja, porque se acerca a 0 grados"
    },
    {
        sentence:"Mountain Climate have [selectOption| ,high,mild,low] precipitation and snow in winter", 
        correctAnswer: "Mountain Climate have high precipitation and snow in winter", 
        timeout: 120, 
        help: "snow: nieve ", 
        explanation: "En las montaña llueve mucho (high precipitation).",
        explanationExtended:"Y como hace frio hay nieve (snow) en invierno"
    }
    

    ,
    {
        sentence:"Oceanic Climate (Atlantic ocean and Cantabrian sea) have [selectOption| ,high,mild,low] temperature (11º-25º) and [selectOption| ,high,mild,low] precipitation (1100 l/m)", 
        correctAnswer: "Oceanic Climate (Atlantic ocean and Cantabrian sea) have mild temperature (11º-25º) and high precipitation (1100 l/m)", 
        timeout: 120, 
        help: "snow: nieve ", 
        explanation: "Como es en la costa las temperaturas son medias, pero claro llueve mucho",
        explanationExtended:""
    }
    ,
    {
        sentence:"Climate Graphs shows the [inputText] average and [inputText] at particular [inputText]", 
        correctAnswer: "Climate Graphs shows the temperature average and precipitation at particular area", 
        timeout: 120, 
        help: "Graphs: graficos \n average: media", 
        explanation: "Los climate graphs muestran la temperatura y la precipitacion en un determinado lugar",
        explanationExtended:""
    },
    {
        sentence:"Temperature Range is the diference [inputText] max and min temperature", 
        correctAnswer: "Temperature Range is the diference between max and min temperature", 
        timeout: 120, 
        help: "", 
        explanation: "El temperature range es la diferencia entre la maxima y la minima temperatura",
        explanationExtended:""
    },

    ,
    {
        sentence:"Garrigue, maquis and Esparto exists on [selectOption| ,Mediterranean,oceanic,mountain] climate", 
        correctAnswer: "Garrigue, maquis and Esparto exists on mediterranean climate", 
        timeout: 120, 
        help: "", 
        explanation: "El temperature range es la diferencia entre la maxima y la minima temperatura",
        explanationExtended:""
    },
    {
        sentence:"Teide violets, palm trees ans laurisilva fores exists on [selectOption| ,Mediterranean,oceanic,mountain,subtropical] climate", 
        correctAnswer: "Teide violets, palm trees ans laurisilva fores exists on subtropical climate", 
        timeout: 120, 
        help: "Teide es un volcan de las islas canarias", 
        explanation: "",
        explanationExtended:""
    },
    {
        sentence:"Decidous trees and mosses exists on [selectOption| ,Mediterranean,oceanic,mountain,subtropical] climate", 
        correctAnswer: "Decidous trees and mosses exists on mountain climate", 
        timeout: 120, 
        help: "mosses: musgo", 
        explanation: "",
        explanationExtended:""
    },
    {
        sentence:"Oaks, shrubs and meadows exists on [selectOption| ,Mediterranean,oceanic,mountain,subtropical] climate", 
        correctAnswer: "Decidous trees and mosses exists on mountain climate", 
        timeout: 120, 
        help: "meadows: Lagos", 
        explanation: "Los lagos estan arriba de las montañas",
        explanationExtended:""
    }
];
