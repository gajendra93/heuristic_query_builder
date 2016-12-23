import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UpdatePage extends React.Component {
	constructor(props) {
    	super(props);
    	this.state ={
    		showQuery: 0,
    		updateId: '',
    		updateVal: '',
    	}
    	this.handleIdChange = this.handleIdChange.bind(this);
    	this.handleValChange = this.handleValChange.bind(this);
    	this.updateQuery = this.updateQuery.bind(this);
    }

    handleIdChange(event) {
    	this.setState({updateId: event.target.value});
    }
    handleValChange(event) {
    	this.setState({updateVal: event.target.value});
    }

    updateQuery() {
		this.setState({showQuery: 1});
	}

	render(){
		let show = '';
		let query = 'match(n:node{id: "'+this.state.updateId+'"}) set n.name = "'+this.state.updateVal+'"';
		if(this.state.showQuery == 1)
			show = <TextField disabled={true} hintText="Query Generated" value={query} />;
		
		const style = {
			margin: 12
		};

		return (
			<div>
				<TextField
					hintText="Enter id of node to update"
					floatingLabelText="Update a node"
					value = {this.state.updateId}
					onChange = {this.handleIdChange}
				/>
				<br/ >
				<TextField
					hintText="Enter Updated node name"
					floatingLabelText="Updated value"
					value = {this.state.updateVal}
					onChange = {this.handleValChange}
				/>
				
				<div>
					<RaisedButton label="Update" primary={true} style={style} onClick={this.updateQuery}/>
				</div>
				{show}
			</div>
		)
	}
}