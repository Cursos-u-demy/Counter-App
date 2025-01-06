import {StyleSheet, Text, View} from 'react-native';

interface Props {
    name?: string;

}

export const HelloWordScreen = ({name='World'} : Props) => {
  return (
    <View style={styles.container}>
      <Text 
        numberOfLines={1}
        
        style={styles.title}>Hello {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    padding: 20,
  }
});
