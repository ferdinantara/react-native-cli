import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View ,Image} from 'react-native';
import Title from './Components/Title';

export default class index extends React.Component {

  render() {
    return (
    	
      <View style={styles.container}>
      	<Title/>
        <Text style={styles.name}>
        	Nama Kukuh Adji Ferdinantara
        </Text>
        <Text style={styles.name}>
        	Kelas XI RPL 4
        </Text>
        <Text style={styles.name}>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  name:{
  	fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },

  teks:{
	fontSize: 12,
	margin:10,
  },

});
