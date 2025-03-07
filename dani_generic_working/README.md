


# Preguntas

Todas las preguntas tienen estos campos disponibles:

    {   
        sentence_title:"can (presente) vs Could (pasado)",
        sentence:"I [selectOption| ,can,could] breathe", 
        correctAnswer: "I can breathe", 
        timeout: 120, 
        help: " breathe: respirar ",
        explanation: "Can (presente) lo usamos para decir una habilidad que tenemos",
        explanationExtended: "I can breathe -> yo puedo respirar (siempre)",
        explanationVideoURL: "https://www.youtube.com/embed/nOXYaVAH9y8?t=35"
    },


# 1. SENTENCE

## 1.1 Sentence Title
Es el titulo que pondra arriba

## 1.2 Sentence 
Es el corazon de la pregunta, puede contener varias partes

- **Texto normal**: Es un texto que se muestra tal cual, no se interpreta
- **[selectOption|,op1,op2]**: si se encuentra un apartado selectOption se mostrara un combo con las opciones. Ejemplo  [selectOption| ,can,could]
- **[inputText]**: si se encuentra un apartado inputText aparecera una caja de texto libre [inputText]

Asi podemos encontrar que la sentence es una mezcla de TextoNormal+selectOptions+inputText

 sentence: "How [selectOption|,are,is] you? I'm [inputText] thanks, and [selectOption|,I,you]?"

## 1.3 correctAnswer	
Es el valor del texto completo que debe tener la sentencia despues de juntar el texto libre, mas el valor que tuvieran tanto los [selectOption] como los [inputText]

Para el ejemplo anterior seria:
 corretAnswer: "How are,is you? I'm fine thanks, and you?"

Con lo cual la seleccion del primer selectOption deberia ser "are" , la del segundo "you" y el campo de [inputText] deberia tener escrito "fine".

## 1.4 timeout
Es el tiempo total para esa pregunta, se ira mostrando por pantalla la cuenta regresiva.
Al finalizar la cuenta, se dará la pregunta como fallida.

## 1.5 help
Si este campo no es nulo, se mostrara un boton de "ayuda" durante la prueba, que al pulsarlo mostrara el contenido en un alert (deberia cambiarse a un modal Window).

Para hacer varias lineas en el alert usar "\n"

## 1.6 explanation
Si la respuesta no es correcta, se mostrara una ventana modal indicando que se ha fallado, con alguna imagen de las fallidas del gamification_manager.
Debajo de la imagen elegida por el gamification_manager, se mostrara el contenido html indicado en el campo explanation

	explanation: "Presta atencion <b> a los verbos </b>" 

## 1.7 explanationExtended
Sirve como complemento a explanation. Es decir funciona igual y su contenido (que puede ser html) se renderizara debajo del contenido de "explanation"

	explanationExtended: "<b> Fine significa "bien" en este contexto </b>"

## 1.8 explanationVideoURL
Si se quiere añadir un video de youtube para que se muestre en la explicacion, se puede poner aqui la URL y será mostrado debajo de las "explanation/explanationExtended" si las hubiere.

	explanationVideoURL: "https://www.youtube.com/embed/nOXYaVAH9y8?t=35"

Internamente hace uso de una plantilla html para mostrar contenido de youtube embebido.

# 2 . Image Maps

Si queremos hacer un tipo de prueba que sea una imagen donde hacer click, debemos usar imageMaps.

Contiene los campos anteriores y se puede añadir el campo imageMap.

El campo "sentence" no se validará con lo cual se deberia usar solo para mostrar el texto de la pregunta. Por ejemplo

	{   
        sentence_title:"Muscular System",
        sentence:"Click on <b>The masseter</b>.", 
        imageMap:"muscularsystem/muscularsystem.imagemap",
        correctAnswer: "masseter", 
		...
    },

El campo **sentence** se interpreta solo para mostrar el texto (es opcional)
El campo imageMap indica la ruta hacia el documento .imagemap que se mostrará.

**ImageMap** un imagemap es un estandar html, donde es una imagen con zonas clickables.
Puedes generar un imageMap a partir de una imagen es esta pagina:
[https://www.image-map.net/](https://www.image-map.net/)

Al generar las zonas de click, es necesario indicar en el href la invocacion al metodo **checkOneTimeQuestion** indicando en el primer argumento el valor string de la **correctAnswer**.

Para el ejemplo anterior indicaremos este href

```javascript
    href="javascript:checkOneTimeQuestion('masseter');"
```
El codigo html del area quedará asi:

```html
<area target="" alt="" title="" href="javascript:checkOneTimeQuestion('masseter');" coords="65,61,172,106" shape="rect">
```
Como el valor de correctAnswer: "masseter" , al hacer click en el area se mostrara el resultado como correcto y se terminara la pregunta.





masseter
Haciendo swap de images

API
https://rapidapi.com/MorfranTechnology/api/faceswap-image-transformation-api/

https://danipenaperez.github.io/educationalTrainingDemos/dani_generic_working/images/danilinkeid.jpeg
zeldaLinkFace.jpg
curl --request POST \
	--url https://faceswap-image-transformation-api.p.rapidapi.com/faceswap \
	--header 'X-RapidAPI-Host: faceswap-image-transformation-api.p.rapidapi.com' \
	--header 'X-RapidAPI-Key: f3950cb21emsh961e4b33f6d99c2p127aa4jsnc767b11d3c64' \
	--header 'content-type: application/json' \
	--data '{
    "TargetImageUrl": "https://danipenaperez.github.io/educationalTrainingDemos/dani_generic_working/images/zeldaLinkFace.jpg",
    "SourceImageUrl": "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg"
}'



<img src="images/danilinkeid.jpeg" alt="Italian Trulli">


, explanationVideoURL:"https://www.youtube.com/embed/nOXYaVAH9y8?t=35"