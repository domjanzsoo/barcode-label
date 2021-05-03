import React from 'react';
import  NewText from './text/NewText';

class TextPanel extends React.Component{

    render(){
        return (
            <div>
            <h2>Text Panel</h2>
            <NewText />
            </div>
        )
    }
}

export default TextPanel;