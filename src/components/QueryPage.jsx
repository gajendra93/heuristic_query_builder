import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class QueryPage extends React.Component {
    
    render(){
        const style = {
            margin: 12
        };
        return (
            <div>
                <RaisedButton label="Add" primary={true} style={style} />
                <RaisedButton label="Read" primary={true} style={style} />
                <RaisedButton label="Update" primary={true} style={style} />
                <RaisedButton label="Delete" primary={true} style={style} />
            </div>
        )
    }
}