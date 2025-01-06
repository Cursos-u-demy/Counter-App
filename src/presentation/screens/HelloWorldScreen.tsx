import {StyleSheet, Text, View} from 'react-native';

export const HelloWordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Word Screen</Text>
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
