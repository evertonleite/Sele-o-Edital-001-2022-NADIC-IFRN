import { StyleSheet, TextInput, View } from 'react-native';

export default function TextInputLogin ({placeholder}){
  return (
    <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#CFC2C2'></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    containerInput: {
        backgroundColor: 'white',
        width: 273,
        height: 57,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        
    },
    input:{
        fontSize: 17,
        paddingLeft: 10
    }
});
