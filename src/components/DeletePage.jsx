import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class DeletePage extends React.Component {
	constructor(props) {
    	super(props);
    	this.state ={
    		showQuery: 0,
    		deleteId: ''
    	}
    	this.handleIdChange = this.handleIdChange.bind(this);
    	this.deleteQuery = this.deleteQuery.bind(this);
    }

    handleIdChange(event) {
    	this.setState({deleteId: event.target.value});
    }

    deleteQuery() {
		this.setState({showQuery: 1});
	}

	render(){
		let show = '';
		let query = 'match(n:node{id: '+this.state.deleteId+'}) delete n';
		if(this.state.showQuery == 1)
			show = <TextField disabled={true} hintText="Query Generated" value={query} />;
		
		const style = {
			margin: 12
		};

		return (
			<div>
				<TextField
					hintText="Enter id to delete"
					floatingLabelText="Delete a node"
					value = {this.state.deleteId}
					onChange = {this.handleIdChange}
				/>
				
				<div>
					<RaisedButton label="Delete" primary={true} style={style} onClick={this.deleteQuery}/>
				</div>
				{show}
			</div>
		)
	}
}