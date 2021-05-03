import {v4 as v4uuid} from 'uuid';

class LabelModel { 
    constructor(labelObj = null) {
        if( labelObj !== null) {
            this.id = labelObj.id;
            this.attrs = {
                width : labelObj.width,
                height : labelObj.height,
            }

            this.elements = {...labelObj.elements};
        } else {
            this.id = v4uuid();
            this.attrs = {
                width: 500,
                height: 300,
            }

            this.elements = {};
        }
    }
}

export default LabelModel;