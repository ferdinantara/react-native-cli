import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View ,Image} from 'react-native';
import Title from './Components/Title';


export default class index extends React.Component {

  render() {
    return (
    	
      <View style={styles.container}>
        <Title title="BIODATA"/>
        <Title title="LOGIN"/>
      	<Title title="FORM"/>
        <Text>
        	Nama Kukuh Adji Ferdinantara
        </Text>
        <Text>
        	Kelas XI RPL 4
        </Text>
        <Text>
        	NO. 20
        </Text>
        <Text style={styles.teks}>
        	My dumb react native app
        </Text>

        <Image style={{width: 100, height: 100}} 
        source={require('./images/image1.android.jpg')}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  teks:{
  	fontSize: 8,
    textAlign: 'center',
    margin: 20,
  },

});
