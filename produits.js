const produit = [
    {Nom:'Clavier', catégorie:'accessoires', prix:120 , Stock:5},
    {Nom:'Souris', catégorie:'accessoires', prix:90 , Stock:8},
    {Nom:'Écran', catégorie:'Informatique', prix:900 , Stock:0},
    {Nom:'Casque', catégorie:'accessoires', prix:240 , Stock:3}
];

for(const e of produit ) {
    console.log(`Nom: ${e.Nom}, Prix: ${e.prix}`);
}
    

const Dis=produit.filter( (e) => e.Stock>0 );
console.log(`Produits disponibles: ${Dis.length}`);

const totalvstock=produit.reduce((som, e) => som + (e.Stock * e.prix), 0);
console.log(`Valeur totale du stock: ${totalvstock} Mad`);

for(i=0; i<produit.length-1; i++){
    if(produit.length!=0 && produit[i].prix<produit[i+1].prix){
         
     console.log(`Le produit le moins cher est: ${produit[i].Nom} `);
    
    }
   
}

const res=produit.map((e) => `Nom: ${e.Nom}- Prix Mad: ${e.prix} - Stock unités: ${e.Stock}`);
for (ligne of res) {
    console.log(ligne);}

function estvalide(produit){
    return Number.isFinite(produit.prix) && produit.prix>0 && Number.isFinite(produit.Stock) && produit.Stock>=0;

};
console.log(estvalide({ prix: 150, Stock: 5 }));
