import { SafeAreaView } from "react-native"
import { HelloWordScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from "./src/presentation/screens/CounterScreen";

export const App = ()=>{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWordScreen name='Edhisson Alvarado'/> */}
      <CounterScreen/>
    </SafeAreaView>
  )
}