import { Platform, Pressable, StyleSheet, Text } from "react-native";


interface Props{
    label:string;
    onPress:() => void;
    onLongPress: () => void;
}


export const PrimaryButton = ({ label, onPress, onLongPress}: Props) =>{
    return (
          <Pressable
            style={({pressed} ) => [ styles.Buttton, pressed && styles.ButtonPress]}
            onPress={() => onPress && onPress()}
            onLongPress={()=> onLongPress && onLongPress()}>
            <Text style={{color: Platform.OS === 'android'? '#ffffff': '#4746AB'}}>
                {label}  {/* Label of the button */}
            </Text>
          </Pressable>
    );
}


const styles = StyleSheet.create({
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
