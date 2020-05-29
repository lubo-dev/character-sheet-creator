import PlainDraggable from "plain-draggable";

export default class ElementData {

    draggable = undefined;
    node = undefined;
    containment = undefined;

    build(node, left, top, width, height) {
        this.containment = {left, top, width, height};
        this.node = node;

        this.draggable = new PlainDraggable(node, {
            containment: this.containment,
            zIndex: 9,
            autoScroll: true,
        });
    }
}
