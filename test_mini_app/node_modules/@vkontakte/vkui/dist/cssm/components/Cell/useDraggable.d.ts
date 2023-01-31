import { TouchEvent } from "../Touch/Touch";
import { CellProps } from "./Cell";
export interface DraggableProps {
    onDragStart: () => void;
    onDragEnd: () => void;
    onDragMove: (e: TouchEvent) => void;
}
interface UseDraggableProps extends DraggableProps {
    dragging: boolean;
    rootElRef: any;
}
export declare const useDraggable: ({ onDragFinish, }: Pick<CellProps, "onDragFinish">) => UseDraggableProps;
export {};
