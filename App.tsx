import { SafeAreaView } from "react-native"
import { HelloWordScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';


import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = ()=>{
  return (
    <PaperProvider
      settings={{ 
        icon:(props)=> <IonIcon {...props}/> 
     }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWordScreen name='Edhisson Alvarado'/> */}
        {/* <CounterScreen/> */}
        <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
  )
}