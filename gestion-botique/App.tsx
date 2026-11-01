
import { StyleSheet, Text, View } from 'react-native';
const produit = [
    {Nom:'Clavier', catégorie:'accessoires', prix:120 , Stock:5},
    {Nom:'Souris', catégorie:'accessoires', prix:80 , Stock:8},
    {Nom:'Écran', catégorie:'Informatique', prix:900 , Stock:0},
    {Nom:'Casque', catégorie:'accessoires', prix:240 , Stock:3}
];
const Dis=produit.filter( (e) => e.Stock>0 );
const totalvstock=produit.reduce((som, e) => som + (e.Stock * e.prix), 0);

export default function App() {
  return (
    <View style={styles.ecran}>  
    <Text style={styles.titre}>Gestionaire de boutique</Text>
    <Text style={styles.ligne}>Produits disponibles: {Dis.length}</Text>
    <Text style={styles.totalvstock}>Valeur totale du stock: {totalvstock} DH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   ecran: { flex: 1, justifyContent: 'center', padding: 26,
 backgroundColor:'#F2F7FD'},
 titre: { fontSize: 24, fontWeight: 'bold', color: '#00235C',
 marginBottom: 200, textAlign: 'center' },
 totalvstock: { fontSize: 19, marginBottom: 20, color: '#131314', textAlign: 'center' },
 ligne: { fontSize: 19, paddingVertical: 20, color: '#0b0b0b', textAlign: 'center' }
 });
