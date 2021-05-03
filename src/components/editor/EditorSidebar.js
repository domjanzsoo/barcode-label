import React from 'react';
import EditorOption from './EditorOption';
import EditorPanel from './EditorPanel';
import { connect } from 'react-redux';
import { switchEditOption } from '../../actions/actions';

class EditorSidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            option:'',
        };
        this.switch = this.switch.bind(this);
    }

    switch(option){
        this.props.switchOption(option);
    }

    render() {
        return (
            <div className="EditorSidebar">
                <div className="EditorOptions">
                    <div>
                    <div onClick={() => {this.switch('barcode')}}><EditorOption option="barcode"/></div>
                    <div onClick={() => {this.switch('text')}}><EditorOption option="text"/></div>
                    <div onClick = {() => {this.switch('image')}}><EditorOption option="image" /></div>
                    <div onClick = {() => {this.switch('icon')}}><EditorOption option="icon" /></div>
                    <div onClick = {() => {this.switch('layers')}}><EditorOption option="layers" /></div>
                    </div>
                    <div className="layers">
                    </div>
                </div>
                <div className ="OptionEditPanel">
                    <EditorPanel />
                </div>
            </div>
        );  
    };
}

const mapStateProps = state => ({
    
    option: state.editOption.currentOption,

});

const mapDispatchToProps = (dispatch) => {
    return {
        switchOption: (option) => { dispatch (switchEditOption(option))},
    }
}; 

export default connect(mapStateProps, mapDispatchToProps)(EditorSidebar);

