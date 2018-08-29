import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native app!</Text>
        <Text>Nama Kukuh Adji Ferdinantara</Text>
        <Text>Kelas XI RPL 4</Text>
        <Text>NO. 20</Text>
        <Text>my first react native app</Text>

        <Image style={{width: 50, height: 50}} 
        source={require('./images/image1.android.jpg')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
