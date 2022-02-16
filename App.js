import { StyleSheet, View } from 'react-native';
import Foco from './src/components/foco';


export default function App() {
  return (
    <View styles={styles.container}> 
     
     <Foco/>
    
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
