

var options = [
    {   
        sentence_title:"Population of Spain",
        sentence:"Population is [selectOption| ,the number of deaths that occur in a place in one year,the number of childern born in a specific place in one year,the numer of people who live in a place]", 
        correctAnswer: "Population is the numer of people who live in a place", 
        timeout: 120, 
        help: " place: lugar \n born: nacer ",
        explanation: "Population (poblacion) es el numero de personas que viven en un lugar",
        explanationExtended: "23 million are men and 24 millon are woman"
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"The Death Rate is [selectOption| ,the difference between the number of people who are born in one year and the number of people who die,the number of deaths that occur in a place in one year]", 
        correctAnswer: "The Death Rate is the number of deaths that occur in a place in one year", 
        timeout: 120, 
        help: " rate: estadistica \n death: muerte \n die: morir ",
        explanation: "Death rate (estadistica de muerte) es el numero de muertes (death) en un lugar durante un año",
        explanationExtended: ""
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"Life expectancy is [selectOption| ,the number of years a person is expected to live,the number of deaths that occur in a place in one year]", 
        correctAnswer: "Life expectancy is the number of years a person is expected to live", 
        timeout: 120, 
        help: " life expectancy: espectativa de vida \n live: vivir \n die: morir ",
        explanation: "Life expectancy (esperanza de vida) es el numero de años que espera vivir una persona",
        explanationExtended: "Spain has high Life expectancy: men 80 years, woman 85 years"
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"Birth rate is [selectOption| ,the number of years a person is expected to live,the number of childern born in a specific place in one year]", 
        correctAnswer: "Birth rate is the number of childern born in a specific place in one year", 
        timeout: 120, 
        help: " rate: estadistica \n birth: nacimiento ",
        explanation: "Birth rate (estadistica de nacimiento) es el numero de nacimientos (born) en un lugar durante un año",
        explanationExtended: "Spain has low Birth Rate: born 8 children for every 1000 persons"
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"Natural growth is [selectOption| ,the number of childern born in a specific place in one year,the difference between the number of people who are born in one year and the number of people who die,the number of deaths that occur in a place in one year]", 
        correctAnswer: "Natural growth is the difference between the number of people who are born in one year and the number of people who die", 
        timeout: 120, 
        help: " Natural growth: estadistica de crecimiento de poblacion  ",
        explanation: "Natural growth es la diferencia entre el numero de nacimientos (born) y el numero de muertes (people die)",
        explanationExtended: ""
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"Spain has population of [selectOption| ,over,low,slow] 47 millon people", 
        correctAnswer: "Spain has population of over 47 millon people", 
        timeout: 120, 
        help: " over: cercano \n low : bajo \n slow: lento",
        explanation: "España tiene una poblacion cercana a los 47 millones de personas",
        explanationExtended: ""
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"Spain has an [selectOption| ,over,ageing] population. One in five poeple are [selectOption| ,over,ageing] 65 years", 
        correctAnswer: "Spain has an ageing population. One in five poeple are over 65 years", 
        timeout: 120, 
        help: " ageing: anciana \n over : cercano ",
        explanation: "España tiene una poblacion anciana (ageing). Uno de cada cinco (one in five) son cercanos (over) a los 65 años",
        explanationExtended: ""
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"Spain has an [selectOption| ,low,slow,high] death rate and life expectancy is very [selectOption| ,low,slow,high]", 
        correctAnswer: "Spain has an low death rate and life expectancy is very high", 
        timeout: 120, 
        help: " low: bajo \n high : alto \n slow : lento ",
        explanation: "España tiene una baja estadistica de muertes (death rate) y la esperanza de vida es alta (high) ya que los hombres llegan a los 80 años y las mujeres a los 85 ",
        explanationExtended: ""
    },
    {   
        sentence_title:"Population of Spain",
        sentence:"Spain has an [selectOption| ,very low,slow,high] birth rate. Since 1970 it has declined due to job [selectOption| ,reconciliation,insecurity] and [selectOption| ,reconciliation,insecurity] of work and family life", 
        correctAnswer: "Spain has an very low birth rate. Since 1970 it has declined due to job insecurity and reconciliation of work and family life", 
        timeout: 120, 
        help: " very low: muy bajo \n declined due: debido a \n since 1970: desde 1970 \n family life : vida en familia ",
        explanation: "",
        explanationExtended: "España tiene una muy baja estadistica de nacimiento. Desde 1970 debido a inseguridad de conseguir trabajo (job insecurity) y la conciliacion de la vida familiar "
    },    
    {   
        sentence_title:"Population of Spain",
        sentence:"The very low Birth rate is a reason to Spain's natural grothw is very [selectOption| ,low,slow,high]", 
        correctAnswer: "The very low Birth rate is a reason to Spain's natural grothw is very slow", 
        timeout: 120, 
        help: " slow: lento \n low: bajo \n reason: razones \n natural grothw: Crecimiento de la poblacion",
        explanation: "",
        explanationExtended: "Como el indice de nacimientos (Birth rate) es muy bajo (low) el crecimiento global de la poblacion (Natural growth) es muy lento "
    },     



    {   
        sentence_title:"What is migraiton like in Spain",
        sentence:"Migration [selectOption| ,refers to people moving from one place to another within the same country or to a different country,the difference between the number of immigrants and the number of emigrants during a year]", 
        correctAnswer: "Migration refers to people moving from one place to another within the same country or to a different country", 
        timeout: 120, 
        help: " refers: se refiere a \n from one place to another: de un lugar a otro \n within: dentro",
        explanation: "",
        explanationExtended: "La Migracion es como se llama a la accion de las personas de mudarse (moving from) de una ciudad a otra (en el mismo pais (country) o distinto pais)"
    },  
    {   
        sentence_title:"What is migraiton like in Spain",
        sentence:"Net Migration [selectOption| ,refers to people moving from one place to another within the same country or to a different country,the difference between the number of immigrants and the number of emigrants during a year]", 
        correctAnswer: "Net Migration the difference between the number of immigrants and the number of emigrants during a year", 
        timeout: 120, 
        help: " Net Migration: estadistica de migracion ",
        explanation: "La estadistica de migracion (NET Migration) es la diferencia entre el numero de personas que vienen (inmigrantes) y los que se van (emigrantes)",
        explanationExtended: "Spain has positive net migration, es positiva (positive) porque vienen mucha gente a vivir aqui"
    },
    {   
        sentence_title:"What is migraiton like in Spain",
        sentence:"Immigrants are people who [selectOption| ,leave their place of birth to live in another place,come to live in a new place]", 
        correctAnswer: "Immigrants are people who come to live in a new place", 
        timeout: 120, 
        help: " Immigrants: vienen a vivir aqui \n Emigrants: salen de su lugar de nacimiento \n come: venir",
        explanation: "Inmmigrantes (Immingrants) son las personas que llegan para vivir en nuestro pais",
        explanationExtended: "Se dice que una persona es emigrante de su pais cuando se va y es inmigrante a nuestro pais cuando llega aqui."
    },
    {   
        sentence_title:"What is migraiton like in Spain",
        sentence:"Emigrants are people who [selectOption| ,leave their place of birth to live in another place,come to live in a new place]", 
        correctAnswer: "Emigrants are people who leave their place of birth to live in another place", 
        timeout: 120, 
        help: " Immigrants: vienen a vivir aqui \n Emigrants: salen de su lugar de nacimiento (place of birth) ",
        explanation: "Emigrantes (Immingrants) son las personas que se van de su lugar de nacimiento (place of birth)",
        explanationExtended: "Se dice que una persona es emigrante de su pais cuando se va y es inmigrante a nuestro pais cuando llega aqui."
    },    

    {   
        sentence_title:"Migration Reasos",
        sentence:"People migrate for some reasons: "+
                "<br> Find a Job is a : [selectOption| ,economic Reason,persecution reason,environmental cause reason]"+
                "<br> Escape war is a : [selectOption| ,economic Reason,persecution reason,environmental cause reason]"+
                "<br> Escape natural disasters such as earthquakes: [selectOption| ,economic Reason,persecution reason,environmental cause reason]"+
                "<br> Improve their living conditions: [selectOption| ,economic Reason,persecution reason,environmental cause reason]"+
                "<br> Escape persecution religious or political: [selectOption| ,economic Reason,persecution reason,environmental cause reason]"+
                "<br> Escape from climate change: [selectOption| ,economic Reason,persecution reason,environmental cause reason]"+
                "<br> Follow a particular career path: [selectOption| ,economic Reason,persecution reason,environmental cause reason]", 
        correctAnswer: "People migrate for some reasons: "+
                "<br> Find a Job is a : economic Reason"+
                "<br> Escape war is a : persecution reason"+
                "<br> Escape natural disasters such as earthquakes: environmental cause reason"+
                "<br> Improve their living conditions: economic Reason"+
                "<br> Escape persecution religious or political: persecution reason"+
                "<br> Escape from climate change: environmental cause reason"+
                "<br> Follow a particular career path: economic Reason", 
        timeout: 120, 
        help: " earthquakes: terremoto \n career path: estudiar una carrera ",
        explanation: "La gente emigra por 3 razones generalmente, desarrollo economico (economic Reason), persecution (guerras en su pais), o desastres naturales como terremotos (environmental causes)",
        explanationExtended: "Los emigrantes vienen sobre todo a Madrid, Barceloa y Andalucia"
    }, 
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"Rural exodus is the cause of [selectOption| ,population,depopulation] of rural areas. The majority of Spanish population now lives in cities.", 
        correctAnswer: "Rural exodus is the cause of depopulation of rural areas. The majority of Spanish population now lives in cities.", 
        timeout: 120, 
        help: " population : poblacion \n depopulation: despoblacion \n rural exodus: gente que emigra (se va) de los pueblos \n majority: la mayoria",
        explanation: "Exodo (significa irse) , exodo rural es la gente se va de las zonas rurales (es decir de los pueblos)",
        explanationExtended: "El exodo rural es el motivo de la despoblacion de las zonas rurales (los pueblos). En España la mayoria de la gente vive en las ciudades."
    }, 
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"The sum of the natural growth and net migration is the [selectOption| ,real growth,natural growth]"+
                 "<br> The difference between the number of people born in one year and the number or people die is [selectOption| ,real growth,natural growth]", 
        correctAnswer: "The sum of the natural growth and net migration is the real growth"+
                        "<br> The difference between the number of people born in one year and the number or people die is natural growth", 
        timeout: 120, 
        help: " born : nacer \n die: morir ",
        explanation: "Natural growth es la diferencia entre la gente que nace (born) y la que se muere",
        explanationExtended: "Para calcular el Real growth (es decir el numero real de personas que viven) necesitamos mirar el Natural growth y tambien el Net migration (la gente que viene a nuestro pais inmigracion y los que se van emigrantes)"
    },
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"Population density is the number of people who live [selectOption| ,live in one place,live in an area per square kilometre]", 
        correctAnswer: "Population density is the number of people who live live in an area per square kilometre", 
        timeout: 120, 
        help: " population density: cantidad de personas ",
        explanation: "La Densidad de poblacion (Population density) es la cantidad de gente que vive en un area. Se calcula dividiendo el numero de personas por el tamaño del area que se quiere calcular",
        explanationExtended: ""
    }, 
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"A small area with large population is a [selectOption| ,densely,sparsely] populated area.", 
        correctAnswer: "A small area with large population is a densely populated area.", 
        timeout: 120, 
        help: " small: pequeña \n large population: mucha poblacion \n densely: denso(muy lleno) \n sparsely: escasamente ",
        explanation: "Si hay mucha gente en un area pequeña, se dice que hay mucha densidad de poblacion (densely)",
        explanationExtended: "España tiene baja densidad de poblacion (low population density), hay 94 personas en cada kilometro cuadrado. En cambio en las ciudades la densidad es mas grande porque viven todos en el mismo area."
    }, 
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"A large area with low population is a [selectOption| ,densely,sparsely] populated area.", 
        correctAnswer: "A large area with large population is a sparsely populated area.", 
        timeout: 120, 
        help: " large: grande \n large population: mucha poblacion \n densely: denso(muy lleno) \n sparsely: escasamente ",
        explanation: "Si el area es grande (large) se dice que hay poca poblacion (sparsely), porque se necesita mas gente para llenarla",
        explanationExtended: "España tiene baja densidad de poblacion (low population density), hay 94 personas en cada kilometro cuadrado. En cambio en las ciudades la densidad es mas grande porque viven todos en el mismo area."
    },
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"Spain has a [selectOption| ,high,low] population density.", 
        correctAnswer: "Spain has a low population density.", 
        timeout: 120, 
        help: " high: alta \n low: baja ",
        explanation: "España tiene una baja (low) densidad de poblacion, es decir hay poca gente por kilometro cuadrado 94 personas/km2",
        explanationExtended: "Esto quiere decir que si hacemos un cuadrado de un kilometro de largo y otro de ancho solo encontraremos 94 personas y eso es muy poco"
    },
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"Population distribution in Spain is [selectOption| ,even,uneven] because are densely and sparsely populated areas.", 
        correctAnswer: "Population distribution in Spain is uneven because are densely and sparsely populated areas.", 
        timeout: 120, 
        help: " even: igual \n uneven: desiguales ",
        explanation: "La poblacion es desigual (uneven) en España porque hay zonas muy pobladas (densely) y otras mas desplobladas (sparsely)",
        explanationExtended: "Las mas pobladas (densely) son las capitales de provinciay las ciudades costeras, en cambio las mas despobladas son cuidades del interior de la peninsula (inland provinces)"
    },
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"Capital of provinces, Comunidad de Madrid and coasts cities are [selectOption| ,sparsely,densely] populated zones.", 
        correctAnswer: "Capital of provinces, Comunidad de Madrid and coasts cities are densely populated zones.", 
        image:"test_images/socials/spain_population.png",
        timeout: 120, 
        help: " densely: muy pobladas \n sparsely: despobladas ",
        explanation: "Las zonas mas pobladas (densely) son las capitales de ciudad, la comunidad de madrid, las grandes ciudades y las ciudades de la costa (coast cities)",
        explanationExtended: ""
    },
    {   
        sentence_title:"Where do people live in Spain",
        sentence:"Inland provinces (Soria, Teruel) are [selectOption| ,sparsely,densely] populated zones.", 
        correctAnswer: "Inland provinces (Soria, Teruel) are sparsely populated zones.", 
        image:"test_images/socials/spain_population.png",
        timeout: 120, 
        help: " densely: muy pobladas \n sparsely: despobladas ",
        explanation: "Las ciudades de zonas interiores de la peninsula (inland provinces) estan mas despobladas (sparsely)",
        explanationExtended: ""
    },






    {   
        sentence_title:"Reordena la frase",
        sentence: "Write correctly",
        sentenceReorder:"refers moving place from Migration another people to one to", 
        correctAnswer: "Migration refers to people moving from one place to another", 
        timeout: 120, 
        help: " refers: se refiere \n moving from: mudarse desde  \n another: otro lugar",
        explanation: " ",
        explanationExtended: ""
    },
    {   
        sentence_title:"Reordena la frase",
        sentence: "Write correctly",
        sentenceReorder:"are people who Immigrants come to live in place a new", 
        correctAnswer: "Immigrants are people who come to live in a new place", 
        timeout: 120, 
        help: " refers: se refiere \n moving from: mudarse desde  \n another: otro lugar \n come: venir",
        explanation: "Inmmigrantes (Immingrants) son las personas que llegan para vivir en nuestro pais",
        explanationExtended: ""
    }


];
