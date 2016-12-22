import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class QueryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.addNode = this.addNode.bind(this);
        this.readNode = this.readNode.bind(this);
        this.updateNode = this.updateNode.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
    }
    addNode() {
        this.setState({view: '<AddPage />'});
    }
    readNode() {
        this.setState({view: '<ReadPage />'});
    }
    updateNode() {
        this.setState({view: '<UpdatePage />'});
    }
    deleteNode() {
        this.setState({view: '<DeletePage />'});
    }
    render(){
        const style = {
            margin: 12
        };
        return (
            <div>
                <RaisedButton label="Add" primary={true} style={style} onClick={this.addNode} />
                <RaisedButton label="Read" primary={true} style={style} onClick={this.readNode} />
                <RaisedButton label="Update" primary={true} style={style} onClick={this.updateNode} />
                <RaisedButton label="Delete" primary={true} style={style} onClick={this.deleteNode} />
                {this.state.view}
            </div>
        )
    }
}