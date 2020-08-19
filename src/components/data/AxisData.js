import {forEach} from 'lodash';
import PlainDraggable from "plain-draggable";

export default class AxisData {
    type = undefined;
    container = undefined;
    node = undefined;
    length = undefined;

    constructor(type, container) {
        this.type = type;
        this.container = container;
        this.length = 300;
    }

    initialize(node, elements) {
        this.node = node;

        if (this.type === 'x') {
            this.node.style.width = `${this.length}px`;
        } else {
            this.node.style.height = `${this.length}px`;
        }

        this.draggable = new PlainDraggable(node, {
            target: this.container,
            onDragEnd: () => {
                this.updateSnapTargets(elements)
            },
            zIndex: 9,
            autoScroll: true,
        });

        this.updateSnapTargets(elements)
    }

    updateSnapTargets(elements) {
        forEach(elements, element => {
            if (!element.draggable.snap) {
                element.draggable.snap = {targets: [{boundingBox: this.node}]};
            } else {
                element.draggable.snap = {targets: [...element.draggable.snap.targets,{boundingBox: this.node}]};
            }
        });
    }
}
