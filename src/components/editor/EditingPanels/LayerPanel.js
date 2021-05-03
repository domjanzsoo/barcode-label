import React from 'react';
import { connect } from 'react-redux';
import LayerElement from './layers/LayerElement';

class LayerPanel extends React.Component{

    render(){
        let layerElmts = this.props.layerElements;
        let layers = Object.keys(layerElmts).map(function(key){
            console.log(key + 'layer element passed to component');
            return <LayerElement key={key} elementData={ layerElmts[key] } />
        });

        return (
            <div>
            <h2>Layers</h2>
            <div className="layers"> {layers} </div>
            </div>
        )
    }
}

const mapStateProps = state =>{
    return {
        layerElements: state.labelContent.elements,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        
    }
}

export default connect(mapStateProps,mapDispatchToProps)(LayerPanel);