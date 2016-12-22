import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class AddPage extends React.Component {
		constructor(props) {
    	super(props);
    	this.state ={
    		showQuery: ''
    	}
    	this.addQuery = this.addQuery.bind(this);
    };
    addQuery() {
				this.setState({showQuery: '<TextField disabled={true} hintText="Query Generated" />'})

		}
	render(){
		const style = {
			margin: 12
		};

		
		return (
			<div>
					<TextField
					hintText="Name of a node"
					floatingLabelText="Add a new node"
					/>
					<div>

					<RaisedButton label="Add" primary={true} style={style} onClick={this.addQuery}/>
					</div>
					{this.state.showQuery}
					

			</div>

			)
	}
}