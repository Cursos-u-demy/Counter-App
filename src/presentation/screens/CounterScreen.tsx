import {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      {/* <PrimaryButton 
        onPress={() => setCount(count + 1)}
        onLongPress={()=> setCount(0)}
        label='Increment'
      /> */}
      <Button
        mode="contained"
        onPress={() => setCount(count + 1)}
        onLongPress={()=> setCount(0)}>
        Increment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Buttton:{
    backgroundColor: Platform.OS === 'android'? '#5856D6': '#ffffff',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonPress:{
    backgroundColor:  Platform.OS === 'android'? '#4746AB': '#ffffff',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
