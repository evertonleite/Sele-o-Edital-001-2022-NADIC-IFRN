import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import TextInputLogin from '../../components/TextInputLogin';

export function Login({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerNameElection}>
                <Text style={styles.NameElection}>Elections</Text>
            </View>
            <View style={styles.containerLogin}>
                <Text style={styles.nameLogin}>Login</Text>
                <TextInputLogin placeholder='Digite seu email'/>
                <TextInputLogin placeholder='Digite sua senha'/>
                <TouchableOpacity style = {styles.buttonLogin}>
                    <Text style = {styles.buttonTextLogin}>Entrar</Text>
                </TouchableOpacity>
                <View style = {styles.containerForNew}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('NewAccount')}>
                        <Text style = {styles.buttonText}>Criar uma nova conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#108B64',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  containerNameElection: {
    justifyContent: 'flex-start',
  },
  NameElection:{
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  containerLogin:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameLogin:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  buttonLogin: {
    backgroundColor: '#FBB136',
    height: 57,
    width: 273,
    marginTop: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonTextLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  containerForNew:{
    paddingTop: 20
  },
  button: {
    marginTop: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
});
