import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { TextInputNewAccount } from '../components/TextInputNewAccount';


export function NewAccount() {
    return (
      <View style={styles.container}>
          <Text>Elections</Text>
          <View style={styles.containerNewAccount}>
            <Text style={styles.namePersonalData}>DADOS PESSOAIS</Text>
            <TextInputNewAccount placeholder='Nome Completo'/>
            <TextInputNewAccount placeholder='Data de Nascimento'/>
            <TextInputNewAccount placeholder='CPF'/>
            <TextInputNewAccount placeholder='Endereço'/>
            <TextInputNewAccount placeholder='Email'/>
            <TextInputNewAccount placeholder='Senha'/>
            <TextInputNewAccount placeholder='Confirmar senha'/>
            <TouchableOpacity style = {styles.buttonLogin}>
                    <Text style = {styles.buttonTextLogin}>Entrar</Text>
                </TouchableOpacity>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFE',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerNewAccount:{
    backgroundColor: 'white',
    height: 485,
    width: 316,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  namePersonalData: {
    color: '#108B64',
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    backgroundColor: '#FBB136',
    height: 57,
    width: 273,
    marginTop: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
