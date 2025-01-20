

var options = [
    //Sentence Type question variations
    {   
        sentence:"[inputText] is the characteristic state of the [inputText] in a specific area over a long period of time.", 
        correctAnswer: "Climate is the characteristic state of the atmosphere in a specific area over a long period of time.", 
        timeout: 30, 
        example: "Climate is the characteristic state of the atmosphere in a specific area over a long period of time."
    },
    {sentence:"The elements for describing  the climate of an area are [inputText] and [inputText].", correctAnswer: "The elements for describing  the climate of an area are temperature and precipitation.", timeout: 30, example: "The elements for describing  the climate of an area are temperature and precipitation."},
    {sentence:"Temperature: How [inputText] the air is. It is measured with a [selectOption| ,thermometer,gauge]. It is expressed in degrees Celsius (ºC).", correctAnswer: "Temperature: How warm the air is. It is measured with a thermometer. It is expressed in degrees Celsius (ºC).", timeout: 30, example: "Temperature: How warm the air is. It is measured with a thermometer. It is expressed in degrees Celsius (ºC)."},
    {sentence:"Marta tiene envidia de la belleza de [selectOption| ,el rulas,papa,la cacho,mama]", correctAnswer: "Marta tiene envidia de la belleza de papa", timeout: 30, example: "Yo estoy montado a caballo."},
    {sentence:"La [inputText] come lechuga en la [inputText]", correctAnswer: "La cacho come lechuga en la cocina", timeout: 30, example: "Yo estoy montado a caballo."},
    {sentence:"¿Quien es un princeso ? [selectOption| ,mama,papa,martin,marta]", correctAnswer: "¿Quien es un princeso ? papa", example: "Yo estoy montado a caballo."},
    {ask:"Si tu eres yo y yo soy tu '<b>¿Quien es mas tonto de los dos?</b>'", correctAnswer: "yo", example: "Yo estoy montado a caballo."}
    
];
