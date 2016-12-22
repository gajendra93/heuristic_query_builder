import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AddPage from './AddPage.jsx';

export default class QueryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0
        }
        this.addNode = this.addNode.bind(this);
        this.readNode = this.readNode.bind(this);
        this.updateNode = this.updateNode.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
    }
    addNode() {
        this.setState({view: 1});
    }
    readNode() {
        this.setState({view: 2});
    }
    updateNode() {
        this.setState({view: 3});
    }
    deleteNode() {
        this.setState({view: 4});
    }
    render(){
        let show = '';
        if(this.state.view == 1)
            show = <AddPage />;
        const style = {
            margin: 12
        };
        return (
            <div>
                <RaisedButton label="Add" primary={true} style={style} onClick={this.addNode} />
                <RaisedButton label="Read" primary={true} style={style} onClick={this.readNode} />
                <RaisedButton label="Update" primary={true} style={style} onClick={this.updateNode} />
                <RaisedButton label="Delete" primary={true} style={style} onClick={this.deleteNode} />
                <br/>
                {show}
            </div>
        )
    }
}