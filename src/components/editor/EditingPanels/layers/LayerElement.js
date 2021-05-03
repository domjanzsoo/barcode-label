import React from 'react';
// import { connect } from 'react-redux';
// import { addNewLabelContent } from '../../../../actions/actions';
// import assetElement from '../../../../models/assetElement';

class LayerElement extends React.Component{
    constructor(props){
        super(props);
        console.log('Layer single component created');
    }

    render (){
        return   <div>{this.props.elementData.id}</div>

    }
}

export default LayerElement;