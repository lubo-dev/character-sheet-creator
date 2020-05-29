import ElementData from "../../data/ElementData";


export default class BlackBoxElementData extends ElementData{

    build(node, containment) {
        super.build(node, containment.left,containment.top, containment.width, containment.height)
    }
}
