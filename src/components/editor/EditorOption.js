import React from 'react';
import {EditingOptions} from './EditingOptions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../src/fontawesome';

class EditorOption extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            optionObject : EditingOptions[props.option],
        };
    }
    
    render(){  
        return(
            <div className = "EditorOptionCont">
                <FontAwesomeIcon className="FontCustom" icon = {this.state.optionObject.icon} />
                <span className = "OptionName">{this.state.optionObject.title} </span>
            </div>
        );
    };
}


export default EditorOption;