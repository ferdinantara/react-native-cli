import React from 'react';
import {Text,view} from 'react-native';

class Title extends React.Component {
	render(){
		return(
			<Text style={decoration.title}>{this.props.title}</Text>
		)
	}
}

const decoration = {
	title:{
		backgroundColor:'#202020',
		color: '#f4f4f4',
		fontSize: 48,
	}
}

export default Title;