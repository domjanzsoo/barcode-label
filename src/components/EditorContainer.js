import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import EditorSidebar from './editor/EditorSidebar';
import LabelContainer from './label/LabelContainer';

class EditorContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log('Component class created');
    }

    componentDidMount() {
        console.log('Mounted');
    }

    render() {
        return (
            <Provider store={ store }>
                <div className="EditorContainer">
                        <EditorSidebar />
                        <LabelContainer />
                </div>              
            </Provider>
        );
    }
 
}

export default EditorContainer;