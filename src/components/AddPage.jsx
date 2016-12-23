import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddPage extends React.Component {
	constructor(props) {
    	super(props);
    	this.state ={
    		showQuery: 0,
    		addVal: ''
    	}
    	this.handleChange = this.handleChange.bind(this);
    	this.addQuery = this.addQuery.bind(this);
    }

    handleChange(event) {
    	this.setState({addVal: event.target.value});
    }

    addQuery() {
		this.setState({showQuery: 1});
	}

	render(){
		let show = '';
		let query = 'create(n:node{name: "'+this.state.addVal+'"})';
		if(this.state.showQuery == 1)
			show = <TextField disabled={true} hintText="Query Generated" value={query} />;

		const style = {
			margin: 12
		};

		return (
			<div>
				<TextField
					hintText="Enter name of node"
					floatingLabelText="Add a new node"
					value = {this.state.addVal}
					onChange = {this.handleChange}
				/>
				
				<div>
					<RaisedButton label="Add" primary={true} style={style} onClick={this.addQuery}/>
				</div>
				{show}
			</div>
		)
	}
}