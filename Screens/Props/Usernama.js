import React,{Component} from 'react';
import {Text,View,TextInput,Button,StyleSheet} from 'react-native';

export default class Usernama extends React.Component {


  render() {
    return (
    	
      <View style={styles.container}>
    		<TextInput style={styles.login} placeholder='e-mail or number'/>
    		<TextInput style={styles.login} secureTextEntry={true} placeholder='password' maxLength={12}>
    		</TextInput>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 300,
    height: 120,
    padding: 20,
    borderRadius: 20, 
  },

  login: {
    height: 40,
  }

});
