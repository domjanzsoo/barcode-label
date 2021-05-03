import React from 'react';
import { connect } from 'react-redux';
import { selectLabel, selectLabelElement, initLabel } from '../../actions/actions';
import LabelModel from  '../../models/LabelModel';
import { Stage, Layer, Rect, Text, Transformer } from 'react-konva';
// import TextComponent from './assets/text';

class LabelContainer extends React.Component{

    constructor(props){
        super(props);

        this.containerRef = React.createRef();
        this.shapeRef = React.createRef();
        this.trRef = React.createRef();
        this.isSelected = true;

        if(!this.props.selectedLabel) {
            const label = new LabelModel();
            this.props.addStage(label);
            this.props.selectLabel(label.id);

        }   
    }

    isLabel() {
        if(!this.props.selectedLabel){
            this.containerRef.setAttribute('style','width:'+ this.props.selectedLabel.attrs.width +'px; height:' + this.props.selectedLabel.attrs.height + 'px;');
            return true;
        }else{
            this.containerRef.setAttribute('style','width:200px; height:90px;');
            return false;
        }
    }

    selectElm(elm) {
        this.props.selectElm(elm);
    }

    getWidth() {
        return this.props.selectedLabel ? this.props.selectedLabel.attrs.width : 200;
    }

    getHeight() {
        return this.props.selectedLabel ? this.props.selectedLabel.attrs.height : 99;
    }

    renderText(attrs, key) {
        let that = this;
        return (
            <React.Fragment>
            <Text
              onClick={() => {
               
              }}
              onChange={newAttrs => {
                
              }}
              key={key}
              ref={this.shapeRef}
              {...attrs}
              draggable
              onDragEnd={e => {
                // ...attrs,
                // x: node.x(),
                // y: node.y(),
               
              }}
        
            />
            
              <Transformer
                ref={that.trRef}
                boundBoxFunc={(oldBox, newBox) => {
                  if (newBox.width < 5 || newBox.height < 5) {
                    return oldBox;
                  }
                  return newBox;
                }}
              />
         
          </React.Fragment>
        );
    }

    renderElements() {
        const elmKeys = Object.keys(this.props.renderingElements);

        let elmArray = elmKeys.map(key =>{
            switch(this.props.renderingElements[key].type) {
                case 'Text':
                    return this.renderText(this.props.renderingElements[key].attrs, key);
                default:
                    return null;
            }
            // return  React.createElement(this.props.renderingElements[key].type,
            //                             {...this.props.renderingElements[key].attrs,
            //                             isSelected: key === this.props.selectElm.id ? true : false,
            //                             draggable: true,
            //                             onDragEnd: (e) => {
            //                                 onChange({
            //                                     ...this.props.renderingElements[key].attrs,
            //                                   x: e.target.x(),
            //                                   y: e.target.y(),
            //                                 });
            //                               },
            //                               onTransformEnd: (e) => {
            //                                 // transformer is changing scale of the node
            //                                 // and NOT its width or height
            //                                 // but in the store we have only width and height
            //                                 // to match the data better we will reset scale on transform end
            //                                 const node = shapeRef.current;
            //                                 const scaleX = node.scaleX();
            //                                 const scaleY = node.scaleY();
                                  
            //                                 // we will reset it back
            //                                 node.scaleX(1);
            //                                 node.scaleY(1);
            //                                 onChange({
            //                                   ...shapeProps,
            //                                   x: node.x(),
            //                                   y: node.y(),
            //                                   // set minimal value
            //                                   width: Math.max(5, node.width() * scaleX),
            //                                   height: Math.max(node.height() * scaleY),
            //                                 })
            //                               }
            //                             });
        });

        return elmArray;
    }


    setTransform() {
        return (
            <Transformer
            ref={this.trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
        )
    }    

    render(){
        
        const assets = this.renderElements();
        const transform = this.setTransform();

        return(
            <div className="labelContainer">
                    { this.props.selectedLabel ?
                        <div className="label" style={{width: this.getWidth(), height: this.getHeight()}} >
                            <Stage width={this.props.selectedLabel.attrs.width} height={this.props.selectedLabel.attrs.height} >
                                <Layer>
                                     <Rect width={100} height={50} fill="green" /> 
                                    { assets }
                                    { transform }
                                </Layer>
                            </Stage>
                        </div>
                    :
                        <h3>Waiting for label</h3> 
                    }
            </div>
        )
    }
}
const mapStateProps = state =>{
    return {
        selectedElm: state.labelContent.selectedElement,
        selectedLabel: state.labelContent.selectedLabel,
        renderingElements: state.labelContent.elements,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addStage: (label) =>{ dispatch(initLabel(label)) },
        selectLabel: (id) =>{ dispatch(selectLabel(id)) },
        selectElm : (elm) =>{ dispatch(selectLabelElement(elm)) }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(LabelContainer);