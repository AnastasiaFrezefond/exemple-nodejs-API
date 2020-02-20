// créer une application : besoin de nombreuses informations 
// Solution 1 : créer des variables 
// Solution 2 : créer des collections grâce à des tableaux 
// Solution 3 : Stocker toutes nos données dans une base de donnée 

// ici on va utiliser la solution numéro 3 

// Quelquesoit la base de donnée
// dans un premier temps, se connecter 
// mongoose.connect("url",(propriete : true))
// retourne deux méthodes 
//.then() => cnnection établie 
// .catch() => Si il  ya une erreur dans l'url

// réaliser un CRUD 

// exemple excel base de données et chaque onglet une collection. Une colone par exemple qui s'appelera ID / nom ...
// Dans le même exemple le schema ce serait dire : deux colones, 3 lignes 
// un modèle ce serait assicier ce schema à une tab

// etape 1 : Schema = l'aspect des données 
// Maintenant je peux faire des manipulations avec la base de données 

// Push() === create === insert 

// Pour ce faire je vais avoir besoin de créer un nouvel objet = nouveau modèle 
// const modele = newModele({"nom" : "nouvelle catégorie"});
// modele.save()

// read == récupérer tous les enregistrement dans une collection

// Modele.find()
