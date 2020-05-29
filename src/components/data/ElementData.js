import PlainDraggable from "plain-draggable";

export default class ElementData {

    draggable = undefined;
    node = undefined;
    target = undefined;

    build(node, target) {
        this.target = target;
        this.node = node;

        this.draggable = new PlainDraggable(node, {
            target,
            zIndex: 9,
            autoScroll: true,
        });
    }
}
