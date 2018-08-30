import React from 'react';
import{Text,view} from 'react-native';

class Title extends React.Component {
	render(){
		return(
			<Text style={decoration.title}>BIODATA</Text>
		)
	}
}

const decoration = {
	title:{
		backgroundColor:'#000',
		color: '#fff',
		fontSize: 64,
	}
}

export default Title;