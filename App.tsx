import { SafeAreaView } from "react-native"
import { HelloWordScreen } from './src/presentation/screens/HelloWorldScreen';

export const App = ()=>{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWordScreen/>
    </SafeAreaView>
  )
}