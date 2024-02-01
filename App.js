import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      <View  style={styles.item}>
        <TextInput/>
        <Image src=''/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue'
  },

  item:{
    width:100,
    borderWidth: 1 ,
    borderColor:"white"
  }
});
