import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containera}> Livro - Príncipe </Text>
      <div style={styles.abc}><Text>O Príncipe Cruel" é o primeiro livro da série "O Povo do Ar", escrito pela autora Holly Black. O enredo segue a história de Jude Duarte, uma humana que, junto com suas irmãs, é levada para viver no reino das fadas após seus pais serem assassinados. No mundo das fadas, dominado pela intriga política e pela crueldade, Jude luta para encontrar seu lugar e ser respeitada, apesar de sua condição humana.

O príncipe Cardan, um dos filhos do rei, é particularmente cruel com Jude, mas ela está determinada a ganhar influência e poder. Ao longo da trama, a protagonista se envolve em jogos perigosos e conspirações dentro da corte, enfrentando desafios complexos enquanto lida com suas próprias ambições e desejos. </Text> </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  abc: {
  alignItems: 'center',
  border: '1px solid red',
  backgroundColor: '#ff3',
  fontSize: '90px',
  maxWidth: '1000px'
  },
  containera: {
   fontSize: '100px',
   }
  });
