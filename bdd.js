// arrête le serveur => shell faire un CTRL + C
// créer un nouveau fichier jour4/bdd.js

// créer une variable de type collection 
/*
const categories = [
    {},
    {},
    {}
]
toutes les modifications réalisées sur cette variable sont stockées dans la RAM 
remplacer cette variable par une base de données 
nous allons utiliser une base de données NoSQL 
base de données qui stocke les informations en format JSON = MongoDB 
1ère chose à faire s'est créer la base de données 
=> mode opératoire pour créer la base de données en online dans le support 
=> Jour5 > déploiement > section 7 > MongoDB online
https://mlab.com/
// login pour ma base de données
// ifocop_admin
// mot de passe pour la base données
// azerty1234
// mongodb+srv://ifocop_admin:<password>@cluster0-yozxs.mongodb.net/test?retryWrites=true&w=majority
// url de connexion 
// 
// ajouter manuellement des enregistrements dans ma base de données test 
2ème chose manipuler = CRUD 
jour3 > CRUD avec Mongoose > Section 3 connexion
attention de bien être dans le dossier qui contient le fichier en cours d'édition
dans un shell => npm i mongoose
*/

const mongoose = require("mongoose"); // télécharger la librairie qui va nous permettre de travailler avec la base de données MongoDB

const urlBdd = "mongodb+srv://ifocop_admin:azerty1234@cluster0-yozxs.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect( urlBdd , { useNewUrlParser : true , useUnifiedTopology: true})
        .then( function(){
            console.log("connexion réussie !");
        })
        .catch(function(err){
            console.log(err);
        }) ;
// nodemon bdd.js

// commencer à vouloir interagir avec cette base de données
// ajouter dans la base de donnée test
// un enregistrement dans la table categorie 
// 1 créer un schéma
const schemaCategorie = new mongoose.Schema({
    nom : String
})
// 2 création d'un modèle
const Category = mongoose.model('categorie', schemaCategorie);

// 3 donnée que l'on veut enregistrer
const dataCategorie = {
    nom : "nouvelle catégorie"
};

// 4 effectuer la sauvegarde  = ajouter une nouvelle ligne dans la base
const categorie = new Category(dataCategorie); 
categorie.save();






