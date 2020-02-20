const express = require("express");
const Joi = require("@hapi/joi");

const router = express.Router();

// créer ma collection qui contient toutes mes datas
// copier / coller depuis le site de formation 

const categories = [
	{id : 1 , nom : "informatique"},
	{id : 2 , nom : "management"},
	{id : 3 , nom : "mathématique"},
];

// récupérer la liste complète de toutes les catégories dans la collection categories

router.get("/", function(req, res){
    // le serveur va renvoyer la variable à 100% 
    // si je l'appelle avec l'url suivant 
    // http://localhost:4004 et la méthode GET
    res.send(categories);
});

// récupérer 1 seule catégorie qui est stockée dans la variable categories

router.get("/:id", function(req, res){
    // récupérer l'id qui a été transmis dans l'url
    const id = req.params.id;
    // vérifier que il existe bien un article avec l'id demandé
    // .find()
    // si c'est ok => retourne l'élément recherché
    // si ko => retourner undefined
    const categorie = categories.find(function(item){
        return item.id === parseInt(id) ;
    }) ;
    // si il n'existe pas alors => répondre NON code erreur 404
    if(!categorie){
        res.status(404).send("il n'existe de catégorie avec l'id "+id);
        return ; 
    }
    // si il existe
    // renvoyer la réponse 
    const index = categories.indexOf(categorie);
    res.send(categories[index]);
    // POSTMan => nouvel onglet 
    // GET 
    // http://localhost:4004/1
    // http://localhost:4004/2
    // http://localhost:4004/44
});

router.post("/",function(req, res){

    // récupérer les informations (JSON) qui sont envoyées depuis POSTMAN

    const body = req.body; //  ici que je récupère le JSON 

    // vérification 
    // création d'un schema 

    // est que il y a un attribut qui a pour nom id ?
    // est que il y a un attribut qui a pour nom id et qui est un chiffre ?
    // est que il y a un attribut qui a pour nom id et qui est un chiffre positif ?
    // est que il y a un attribut qui a pour nom nom ?
    // est que il y a un attribut qui a pour nom nom et qui est un chaine de caractères ?
    // est que il y a un attribut qui a pour nom nom et qui est un chaine 3 caractères min  ?
    // est que il y a un attribut qui a pour nom nom et qui est un chaine 255 caractères max  ?
    const schema = Joi.object({
        id : Joi.number().min(0).required(),
        nom : Joi.string().min(3).max(255).required()
    });

    // vérification = comparaison

    const verif = schema.validate(body);

    /*
    {
        "id" : 4,
        "nom" : "autre catégorie"
    }
    */ 

    // si ce n'est pas conforme => NON je ne peux pas traiter + dire pourquoi
    if(verif.error){
        res.status(403).send(verif.error.detail[0].message);
        return;
    }
     // res.send(verif);
     // est ce que l'id de l'objet n'est pas déjà 

     const categorie = categories.find(function(){
         return item.id === parseInt(body.id);
     
     });
    
    // si c'est conforme alors je vais ajouter à la suite le JSON dans la variable categories  
    categories.push(body);
    res.send(categories); 
});

router.delete("/:id", function(req, res){
    // récupérer l'id dans l'url 
    const id = req.params.id;

    // est qu'il y a bien un enregistrement dans la variable categorie qui a l'id 
    const categorie = categories.find(function(item){
        return item.id === parseInt(id);
    });

    // Si non => stop et on va dire qu'il n'existe pas d'enregistrement avec l'id concerné
    if (categorie){
        res.status(404).send("Aucun enregistrement avec l'id " + id);
        return;
    }
    // Si OK => Suppression
    const index = categories.indexOf(categorie);
    categories.splice(index,1);
    res.send(categories);
});

router.put("/", function(){

    // récupérer l'id dans l'url 
    const id = req.params.id;

    // récupérer le body  => JSON 
    const body = req.body; 

    // vérifier qu'il existe bien un enregistrement avec l'id concerné 
    const categorie = categories.find(function(item){
        return item.id === parseInt(id);
    });

    // Si KO erreur 404 et message 
    if (!categorie){
        res.status(404).send("Aucun enregistrement avec l'id " + id);
        return;
    }
    
    // Vérifier que c'est confirme à un schema 
    const schema = Joi.object({
        nom : Joi.string().min(3).max(255).required()
    });
    
    const verif = schema.validate(body);

    // Si KO => erreur 400 + message 
    if(verif.error){
        res.status(400).send(Joi.error.details[0].message);
        return;
    }

    // Si tout OK => mis à jour et envoyer la liste des enregistrements 
    const index = categories.indexOf(categorie);
    categorie[index].nom = body.nom;
    resizeBy.send(categories);
});


// en fin de page pour exporter
module .exports = router;