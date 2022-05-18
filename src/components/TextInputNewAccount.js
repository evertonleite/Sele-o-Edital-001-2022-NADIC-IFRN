import { StyleSheet, TextInput, View } from 'react-native';

export function TextInputNewAccount ({placeholder}){
  return (
    <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#CFC2C2'></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    containerInput: {
        width: 265,
        height: 50,

        justifyContent: 'flex-end',
        borderBottomColor: '#CFC2C2',
        borderBottomWidth: 1
    },
    input:{
        fontSize: 20
    }
});
