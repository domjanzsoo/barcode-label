import React from 'react';
import { connect } from 'react-redux';
import assetElement from '../../../../models/assetElement';
import { addNewLabelContent } from '../../../../actions/actions';

class NewText extends React.Component{
    constructor(props) {
        super(props);
        this.createText = this.createText.bind(this);
    }

    createText() {
        console.log('Create text element button clicked');
        let textElement = new assetElement('Text');
    
        this.props.addText(textElement);
    }

    render() {
        return (
            <div className="btn" onClick={this.createText}>
                Add new text
            </div>
        );
    }

}

const mapStateProps = state =>({
    stage: state.labelContent.stage,
});

const mapDispatchToProps = dispatch =>{
    return{
        addText : (textElm) =>{ dispatch(addNewLabelContent(textElm))},
    }
}


export default connect(mapStateProps,mapDispatchToProps)(NewText);