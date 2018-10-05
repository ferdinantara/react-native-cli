import React,{Component} from 'react';
import {Text,View,TextInput,Button,StyleSheet,TouchableHighlight} from 'react-native';
import Usernama from './Props/Usernama';
import {createStackNavigator} from 'react-navigation';

class Login extends React.Component {
  render() {
    return (
    	
      <View style={styles.container}>
          <Text style={styles.Facebook}>
            FACEBOOK
          </Text>
        	<Usernama/>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.tombol}>
              LOGIN
            </Text>
          </TouchableHighlight>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex : 1,
    backgroundColor: '#3b5999',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
      height: 50,
      width: 250,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor: '#f4f4f4',
      marginTop: 25,
      borderRadius: 25,
  },

  tombol: {
    fontSize: 18,
  },

  Facebook: {
    color: '#f4f4f4',
    fontFamily: 'Roboto',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  }
});

export default Login;