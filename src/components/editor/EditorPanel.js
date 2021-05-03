import React from 'react';
import { connect } from 'react-redux';
import TextPanel from './EditingPanels/TextPanel';
import BarcodePanel from './EditingPanels/BarcodePanel';
import IconPanel from './EditingPanels/IconPanel';
import ImagePanel from './EditingPanels/ImagePanel';
import LayerPanel from './EditingPanels/LayerPanel';
import DefaultEditPanel from './EditingPanels/DefaultEditPanel';

class EditorPanel extends React.Component{

    constructor(props){
        super(props);
        this.panelRender = this.panelRender.bind(this);
    }

    panelRender(option){
        switch(option){
            case 'text': 
            return <TextPanel /> ;
            case 'barcode':
            return <BarcodePanel /> ;
            case 'image':
            return <ImagePanel /> ;
            case 'icon':
            return <IconPanel /> ;
            case 'layers':
            return <LayerPanel />
            default:
            return <DefaultEditPanel /> ; 
        };
    }

    render(){
        let panel = this.panelRender(this.props.option);
        return(
          <div className="panel">
            {panel}
            </div>  
        );
    }
}

const mapStateProps = state => ({
    option : state.editOption.currentOption,
});

export default connect(mapStateProps, null)(EditorPanel);