import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchPage extends React.Component {
	constructor(props) {
    	super(props);
    	this.state ={
    		showQuery: 0,
    		searchId: ''
    	}
    	this.handleIdChange = this.handleIdChange.bind(this);
    	this.searchQuery = this.searchQuery.bind(this);
    }

    handleIdChange(event) {
    	this.setState({searchId: event.target.value});
    }

    searchQuery() {
		this.setState({showQuery: 1});
	}

	render(){
		let show = '';
		let query = 'match(n:node{id: '+this.state.searchId+'}) return n';
		if(this.state.showQuery == 1)
			show = <TextField disabled={true} hintText="Query Generated" value={query} />;
		
		const style = {
			margin: 12
		};

		return (
			<div>
				<TextField
					hintText="Enter id to search"
					floatingLabelText="Search a node"
					value = {this.state.searchId}
					onChange = {this.handleIdChange}
				/>
				
				<div>
					<RaisedButton label="Search" primary={true} style={style} onClick={this.searchQuery}/>
				</div>
				{show}
			</div>
		)
	}
}