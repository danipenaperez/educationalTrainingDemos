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