import { v4 as uuidv4 } from 'uuid';

class assetElement{
    constructor(type, elm = null) {
        if(elm) {
            this.id = elm.id;
            this.attrs = { ...elm.attrs };
            this.type = elm.type;
        } else {
            this.id = uuidv4();
            this.attrs = {
              ...this[type + 'Default'],
              key: this.id  
            }
            this.type = type;
        }
    }
  
    TextDefault = {
    text: "Text Muhahaha",
    fontType: "Arial",
    fontSize: 26,
    fontBold: false,
    fontItalic: false,
    underLine: false,
    frame: false,
    align: "center",
    visible: true,
    posX: 0,
    posY: 0,
    letterSpacing: 0,
    upperCase: false,
    draggable:true,
    }
}

export default assetElement;