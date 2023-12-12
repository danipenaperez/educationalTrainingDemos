# educationalTrainingDemos
Some examples to educational Training

Para probar en local 

./static_server.sh local-new-start

https://danipenaperez.github.io/educationalTrainingDemos/



# TODO

Una que sea un titulo de "Selecciona las correctas"
titulo: "Familia de palabras de comida
Lista de checkbox
Al pulsar todos los chebox correctos e incorrectos se termina el juego

------------------
Una palabra, o una oracion, se divide en cachos 
por ejemplo 
"pulsa sobre el articulo determinado"
"pulsa sobre el sufijo de esta palabra"
"pulsa sobre el verbo de la frase"
"pulsa sobre el complemento directo" 


1. TIPOS DE PREGUNTA
	- Una pregunta de Texto
	- Una imagen
	- Un video
        - OPCIONES:
          - Con timeout
          - Sin timeout 
          - Con ayuda para la pregunta

 var askModel = {
    type: "text|fillWords|image|video|clickon (multi/single)|order|",
    src: "text|urlVideo|urlImage"
 }         

2. TIPOS DE RESPUESTA
	- tres botones y eliges la correcta
	- escribir la respuesta a mano
    - Ordenar la frase
    - selecciona una palabra de la frase
var answerModel = {
  type: "buttons|text"
  buttons:{
     options: 3,
     source
  },
  text:{

  }
}   
3. ORDEN DE PREGUNTAS
    - AL AZAR entre las que hay disponibles
    - Por orden (ya que pretenden enseñar algo)
    - Entre Pregunta y pregunta puede enseñar informacion o explicar ()
      es util para test incremental.

4. RESULTADOS
    - FALLO:
      - opcion correcta
      - opcion correcta + explicacion
      - explicacion
    - CONSEGUIDO
        - ACIERTO PREGUNTA:
            - Personaje misterioso (opacidad o partes)
            - Imagen batalla personajes
    -
5. GLOBALES
    - TOTAL ACIERTOS
    - USO RACHA



