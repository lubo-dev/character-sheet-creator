import PlainDraggable from "plain-draggable";

export default class ElementData {

    draggable = undefined;
    node = undefined;
    container = undefined;

    initialize(node, container) {
        this.container = container;
        this.node = node;

        this.draggable = new PlainDraggable(node, {
            target: container,
            zIndex: 9,
            autoScroll: true,
        });
    }
}
