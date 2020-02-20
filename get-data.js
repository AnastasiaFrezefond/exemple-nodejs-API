// jour4/get-data.js

const mongoose = require("mongoose");

// 1 connexion à la balise donnée
const urlBdd = "mongodb+srv://ifocop_admin:azerty1234@cluster0-yozxs.mongodb.net/test?retryWrites=true&w=majority";
const optionConnexion = {
    useNewUrlParser : true ,
    useUnifiedTopology: true
};
mongoose.connect( urlBdd , optionConnexion )
        .then(function(){
            console.log("connexion réussie");
        })
        .catch(function(err){
            console.log(err)
        });
// shell nodemon get-data.js

// pour manipuler 

// 2 créer une schéma = définir l'aspect de mes données = les nom des colonnes

const schemaCategorie = mongoose.Schema({
    nom : String
})

// 3 liaison entre le schéma et une table = onglet Excel = Modele

const Category = mongoose.model("categorie", schemaCategorie)
// lorsque l'on fait des manipulations sur une base données 
// il y a une latence du réseau 

async function getAllData()
{
    const resultat = await Category.find(); 
    console.log(resultat);
}




getAllData();









    