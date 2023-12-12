var asks = [
    {
        type: "image",
        src: "https://danipenaperez.github.io/uploads/gallery_img-01.jpg",
        answer:{
            type: "buttons",
            options: "perro,gato,paloma",
            success: "perro",
            onSuccess: function(){
                alert('muy bien');
            },
            onFail: function(){
                alert("muy mal");
            }
        }
    }

]


var generalOptions = {
    asks: asks,
    order: sequential,
    score: {
        type: "average",
        finishOn: 15
    }
}

