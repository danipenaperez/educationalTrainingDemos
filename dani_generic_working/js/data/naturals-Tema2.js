

var options = [
    //Sentence Type question variations
    {   
        sentence_title:"Stimuli",
        sentence:"In [selectOption| ,automatic,voluntary] actions, a sense organ detects a stimulus and sends information to the [selectOption| ,spinal cord,brain]. It decides how to act and sends orders along the [selectOption| ,nerves,spinal cord] to the muscles.", 
       
        correctAnswer: "In voluntary actions, a sense organ detects a stimulus and sends information to the brain. It decides how to act and sends orders along the nerves to the muscles.", 
        timeout: 120, 
        help: "Send: enviar \n along: a traves",
        explanation: "",
        explanationExtended: "Los movimientos automaticos los usa el cuerpo para automaticamente enviar informacion al cerebro y asi nos ayuda a vivir. La respuesta del cerebro se manda a los musculos a traves de los nervios."
    }
    ,
    {   
        sentence_title:"Stimuli",
        sentence:"In reflex actions, a sense organ detects a stimulus and sends information along the nerves to the [selectOption| ,spinal cord,brain]. It receives the information and sends an order along the nerves to the muscles.", 
        correctAnswer: "In reflex actions, a sense organ detects a stimulus and sends information along the nerves to the spinal cord. It receives the information and sends an order along the nerves to the muscles.", 
        timeout: 120, 
        help: "Send: enviar \n along: a traves",
        explanation: "",
        explanationExtended: "Los movimientos reflejos (automaticos, involuntarions) los sense organs manda la informacion del estimulo al spinal cord y ella responde directamente sin avisar al cerebro, mandando la orden al musculo a traves de los nerves"
    },
    {   
        sentence_title:"Reflexes or Voluntary",
        sentence:"You sneeze is a [selectOption| ,reflex,voluntary] action.", 
        // image:"images/danilinkeid.jpeg",
        correctAnswer: "You sneeze is a reflex action.", 
        timeout: 120, 
        help: " sneeze: estornudo \n reflex: reflejo",
        explanation: "",
        explanationExtended: "Los movimientos reflejos son los movimientos automaticos del cuerpo, que reacciona automaticamente a estimulos sin que nosotros lo controlemos."
    },
    {   
        sentence_title:"Muscles meets bones",
        sentence:"The muscles meets the bones at [selectOption| ,cartilage,tendons].", 
        // image:"images/danilinkeid.jpeg",
        correctAnswer: "The muscles meets the moveable bones at tendons.", 
        timeout: 120, 
        help: " meets: unirse \n ",
        explanation: "",
        explanationExtended: "Los musculos se unen a los huesos para poder moverlos con un tejido (tissue) llamado tendones."
    },
    {   
        sentence_title:"Bones meets bones",
        sentence:"[selectOption| ,cartilage,tendons] is a tissue that protect bone joints from rubbing.", 
        // image:"images/danilinkeid.jpeg",
        correctAnswer: "cartilage protect bone joints from rubbing.", 
        timeout: 120, 
        help: " tissue: tejido \n rubbing: rozamiento",
        explanation: "",
        explanationExtended: "En las joints se juntan 2 huesos, para que esos huesos no se rompan al rozarse (rubbing) hay un tejido (tissue) llamado cartilago."
    }
    ,
    {   
        sentence_title:"Reflexes or Voluntary",
        sentence:"You are tired and yawm is a [selectOption| ,reflex,voluntary] action.", 
        correctAnswer: "You are tired and yawm is a reflex action.", 
        timeout: 120, 
        help: " tired: cansado \n yawm: bostezar \n reflex: reflejo (involuntario)",
        explanation: "",
        explanationExtended: "Los bostezos nos salen solos por eso son movimientos reflejos del cuerpo."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"The muscular system is made of all the [selectOption| ,muscles,joints] in our body.", 
        correctAnswer: "The muscular system is made of all the muscles in our body.", 
        timeout: 120, 
        help: " made of: construido por \n joints: articulaciones",
        explanation: "",
        explanationExtended: "El sistema muscular esta compuesto por todos los musculos de nuestro cuerpo."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"Muscles contract in response to orders they receive from the [selectOption| ,skeletal,nervous] system.", 
        correctAnswer: "Muscles contract in response to orders they receive from the nervous system.", 
        timeout: 120, 
        help: " contract: contraerse por \n receive: recibir",
        explanation: "",
        explanationExtended: "Los musculos se contraen o se expanden segun las ordenes que les llegan a traves del sistema nervioso."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"When a muscle [selectOption| ,contracts,expands (relax)] it returns to its original size.", 
        correctAnswer: "When a muscle expands (relax) it returns to its original size.", 
        timeout: 120, 
        help: " contract: contraerse (hacerse mas pequeño) \n expand: expandirse (hacerse mas grande)",
        explanation: "",
        explanationExtended: "Los musculos en estado normal estan expandidos, cuando se usan lo que pasa es que se contraen (se aprietan)."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"Many muscles are attached to the bones by [selectOption| ,tendons,ligaments].", 
        correctAnswer: "Many muscles are attached to the bones by [selectOption| ,tendons,ligaments].", 
        timeout: 120, 
        help: " attached: unirse  \n expand: expandirse (hacerse mas grande)",
        explanation: "",
        explanationExtended: "Los tendones son un tejido que une los musculos con los huesos. Los ligamentos une los huesos entre ellos."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"The [selectOption| ,long,short,circular,flat] muscles are like a sheet.", 
        correctAnswer: "The flat muscles are like a sheet.", 
        timeout: 120, 
        help: " like a sheet: parecen un folio \n short: cortos \n flat: planos ",
        explanation: "",
        explanationExtended: "Los musculos planos (flat) son los que estan en el abdomen."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"The [selectOption| ,long,short,circular,flat] muscles are like a sheet.", 
        correctAnswer: "The flat muscles are like a sheet.", 
        timeout: 120, 
        help: " like a sheet: parecen un folio \n short: cortos \n flat: planos ",
        explanation: "",
        explanationExtended: "Los musculos planos (flat) son los que estan en el abdomen."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"The [selectOption| ,long,short,circular,flat] muscles are shaped like a ring.", 
        correctAnswer: "The circular muscles are shaped like a ring.", 
        timeout: 120, 
        help: " shaped: forma \n like a : parecen una \n ring: anillo \n flat: planos ",
        explanation: "",
        explanationExtended: "Los musculos redondos (circular) estan por ejemplo en los ojos y la boca (que son redondos circulares) ."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"The [selectOption| ,long,short,circular,flat] muscles are in the hands and the feets.", 
        correctAnswer: "The short muscles are in the hands and the feets.", 
        timeout: 120, 
        help: " hands : manos \n feets: pies ",
        explanation: "",
        explanationExtended: "Los musculos redondos (circular) estan por ejemplo en los ojos y la boca (que son redondos circulares) ."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"The [selectOption| ,long,short,circular,flat] muscles have narrow ends.", 
        correctAnswer: "The long muscles have narrow ends.", 
        timeout: 120, 
        help: " narrow ends : extremos estrechos \n long: largo \n flat: planos \n short: cortos ",
        explanation: "",
        explanationExtended: "Los musculos biceps y los musculos de los brazos y las piernas son anchos (wider) en el centro pero estrechos en los lados (extremos) ."
    },
    {   
        sentence_title:"Muscular System",
        sentence:"The [selectOption| ,long,short,circular,flat] muscles have the middle part wider.", 
        correctAnswer: "The long muscles have the middle part wider.", 
        timeout: 120, 
        help: " middle part : en medio \n wider: anchos \n flat: planos \n short: cortos ",
        explanation: "",
        explanationExtended: "Los musculos biceps y los musculos de los brazos y las piernas son anchos (wider) en el centro pero estrechos en los lados (extremos) ."
    },
    {   
        sentence_title:"Skeletal System",
        sentence:"How many bones does the human skeleton have?: [inputText]", 
        correctAnswer: "How many bones does the human skeleton have?: 206", 
        timeout: 120, 
        help: " how many : cuantos \n have: tener ",
        explanation: "",
        explanationExtended: "El esqueleto esta compuesto por 206 huesos."
    },
    {   
        sentence_title:"Skeletal System",
        sentence:"Our skeletal system and muscular systems are made up of our bones and [inputText]", 
        correctAnswer: "Our skeletal system and muscular systems are made up of our bones and muscles", 
        timeout: 120, 
        help: " made up : formado \n Our: nuestro ",
        explanation: "",
        explanationExtended: "Nuestro cuerpo esta formado por el el esqueleto que son los huesos y el muscular system que son los musculos."
    },
    {   
        sentence_title:"Skeletal System",
        sentence:"Bones are hard and strong organs. They contains minerals like [inputText]", 
        correctAnswer: "Bones are hard and strong organs. They contains minerals like calcium", 
        timeout: 120, 
        help: " bones : huesos \n hard: duros \n strong: fuertes ",
        explanation: "",
        explanationExtended: "Los huesos son duros y fuertes. Dentro tienen minerales como el calcio. Nos ayudan a que sean un poco flexibles y asi no se partan."
    },
    {   
        sentence_title:"Muscle Movements",
        sentence:"Muscles are elastic organs.<br> They [inputText] and relax to produce the movements of our body.", 
        correctAnswer: "Muscles are elastic organs.<br> They contracts and relax to produce the movements of our body.", 
        timeout: 120, 
        help: " relax : relajarse (estirarse) ",
        explanation: "",
        explanationExtended: "Los musculos pueden estar en relax (relajados) que es cuando se expanden o pueden estar contraidos que es cuando estamos haciendo fuerza usandolos."
    }


    // {   
    //     sentence_title:"Muscle Movements",
    //     sentence:"Muscles are elastic organs.", 
    //     selectChecks: "[select|sprain,fracture,muscle contracture]",
    //     correctAnswer: "sprain", 
    //     timeout: 120, 
    //     help: " relax : relajarse (estirarse) ",
    //     explanation: "",
    //     explanationExtended: "Los musculos pueden estar en relax (relajados) que es cuando se expanden o pueden estar contraidos que es cuando estamos haciendo fuerza usandolos."
    // }
    ,
    {   
        sentence_title:"Skeletal System",
        sentence:"Bones can be of three types: short, long and [inputText].", 
        correctAnswer: "Bones can be of three types: short, long and flat.", 
        timeout: 120, 
        help: " can be: pueden ser  \n three: tres ",
        explanation: "",
        explanationExtended: "Hay 3 tipos de huesos: short (cortos), long (largos) y flat (planos por ejemplo en la cabeza)."
    }
    ,
    {   
        sentence_title:"Muscle Types",
        sentence:"Muscles can be of four types: short, long, flat and [inputText].", 
        correctAnswer: "Muscles can be of four types: short, long flat and circular.", 
        timeout: 120, 
        help: " can be: pueden ser  \n four: cuatro ",
        explanation: "",
        explanationExtended: "Hay 4 tipos de musculos: short (cortos), long (largos), flat (planos) y circular (circulares que estan en la boca y los ojos)."
    }
    ,
    {   
        sentence_title:"Protect our bodies",
        sentence:"Our bones and muscles and joints can be injured. <br> A [selectOption| ,sprain,fracture,muscle contracture] is a broken bone.", 
        correctAnswer: "Our bones and muscles and joints can be injured. <br> A fracture is a broken bone.", 
        timeout: 120, 
        help: " Injuried : enfermar  \n broken: roto \n bone: hueso",
        explanation: "",
        explanationExtended: "Cuando se rompe un hueso se llama fracture (fractura)."
    }
    ,
    {   
        sentence_title:"Protect our bodies",
        sentence:"Our bones and muscles and joints can be injured. <br> When a ligament is stretched occurs a [selectOption| ,sprain,fracture,muscle contracture].", 
        correctAnswer: "Our bones and muscles and joints can be injured. When a ligament is stretched occurs a sprain.", 
        timeout: 120, 
        help: "Injuried : enfermar  \n ligament: ligamento \n stretched: estirado ",
        explanation: "",
        explanationExtended: "Cuando los ligamentos se estiran se dice que ha ocurrido un sprain (esguince)."
    },
    {   
        sentence_title:"Protect our bodies",
        sentence:"Our bones and muscles and joints can be injured.<br> A [selectOption| ,sprain,fracture,muscle contracture] is a involuntary and prolonged contraction of a muscle.", 
        correctAnswer: "Our bones and muscles and joints can be injured.<br> A muscle contracture is a involuntary and prolonged contraction of a muscle.", 
        timeout: 120, 
        help: " Injuried : enfermar  \n prolonged: duradero \n contraction: contraerse ",
        explanation: "",
        explanationExtended: "Cuando un musculo de nuestro cuerpo se pone tenso sin que lo pongamos nosotros (es decir no es voluntario) durante mucho tiempo nos duele y eso se llama muscle contracture (contractura de un musculo)."
    },
    {   
        sentence_title:"Muscle Movements",
        sentence:"Reflexes are fast, [selectOption| ,voluntary,involuntary] actions. Many reflex actions involve the [selectOption| ,spinal cord,skeleton], not the brain.", 
        correctAnswer: "Reflexes are fast, involuntary actions. Many reflex actions involve the spinal cord, not the brain.", 
        timeout: 120, 
        help: "Reflexes : reflejos  \n involve: lo realiza  ",
        explanation: "",
        explanationExtended: "Los movimientos reflejos son involuntarios, nosotros no los controlamos (como por ejemplo cuando nos quemamos con fuego nos apartamos). Esos movimientos no los decide el cerebro )brain, los decide la espia dorsal (spinal cord)" 
    },
    {   
        sentence_title:"Sleletal Movements",
        sentence:"The skeleton bones moves thanks to moveable [selectOption| ,nerves,joints]. The muscles that makes opposite movements are called [selectOption| ,antagonists,large,flat].", 
        correctAnswer: "The skeleton bones moves thanks to moveable joints. The muscles that makes opposite movements are called antagonists.", 
        timeout: 120, 
        help: "moves thanks : se mueven gracias a  \n opposite: opuestos (contrarios)  ",
        explanation: "",
        explanationExtended: "Cuando cerramos el brazo usamos el biceps, pero para volver a abrirlo (Es decir el movimiento contrario opposite) usamos el triceps" 
    }
];
