import * as React from "react";
import { VKUITouchEvent } from "../../lib/touch";
import { HasComponent, HasRootRef } from "../../types";
export interface TouchProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasComponent {
    /**
     * Привязать onEnter и onLeave через pointer-events - работает на disabled-инпутах
     */
    usePointerHover?: boolean;
    useCapture?: boolean;
    slideThreshold?: number;
    noSlideClick?: boolean;
    onEnter?: HoverHandler;
    onLeave?: HoverHandler;
    onStart?: TouchEventHandler;
    onStartX?: TouchEventHandler;
    onStartY?: TouchEventHandler;
    onMove?: TouchEventHandler;
    onMoveX?: TouchEventHandler;
    onMoveY?: TouchEventHandler;
    onEnd?: TouchEventHandler;
    onEndX?: TouchEventHandler;
    onEndY?: TouchEventHandler;
    stopPropagation?: boolean;
}
export interface Gesture {
    startX: number;
    startY: number;
    startT: Date;
    duration: number;
    isPressed: boolean;
    isY: boolean;
    isX: boolean;
    isSlideX: boolean;
    isSlideY: boolean;
    isSlide: boolean;
    shiftX: number;
    shiftY: number;
    shiftXAbs: number;
    shiftYAbs: number;
}
export interface TouchEvent extends Gesture {
    originalEvent: VKUITouchEvent;
}
declare type HoverHandler = (outputEvent: MouseEvent) => void;
export declare type TouchEventHandler = (e: TouchEvent) => void;
export declare type ClickHandler = (e: React.MouseEvent<HTMLElement>) => void;
export declare type DragHandler = (e: React.DragEvent<HTMLElement>) => void;
export declare const Touch: React.FC<TouchProps>;
export {};
