import BlackBoxElementData from "../elements/blackbox/BlackBoxElementData";

export default class PageData {
    order = undefined;
    elements = [];

    constructor(order) {
        this.order = order;
    }

    addElement(type) {
        switch (type) {
        case 'blackbox':
            this.elements.push(new BlackBoxElementData());
            break;
        }
    }
}
