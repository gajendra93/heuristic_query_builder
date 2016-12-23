import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AddPage from './AddPage.jsx';
import SearchPage from './SearchPage.jsx';
import UpdatePage from './UpdatePage.jsx';
import DeletePage from './DeletePage.jsx';

export default class QueryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0
        }
        this.addNode = this.addNode.bind(this);
        this.searchNode = this.searchNode.bind(this);
        this.updateNode = this.updateNode.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
    }
    addNode() {
        this.setState({view: 1});
    }
    searchNode() {
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
        else if(this.state.view == 2)
            show = <SearchPage />;
        else if(this.state.view == 3)
            show = <UpdatePage />;
        else if(this.state.view == 4)
            show = <DeletePage />;

        const style = {
            margin: 12
        };
        return (
            <div>
                <RaisedButton label="Add" primary={true} style={style} onClick={this.addNode} />
                <RaisedButton label="Search" primary={true} style={style} onClick={this.searchNode} />
                <RaisedButton label="Update" primary={true} style={style} onClick={this.updateNode} />
                <RaisedButton label="Delete" primary={true} style={style} onClick={this.deleteNode} />
                <br/>
                {show}
            </div>
        )
    }
}