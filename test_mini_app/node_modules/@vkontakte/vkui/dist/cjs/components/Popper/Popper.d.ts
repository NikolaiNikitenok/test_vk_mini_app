import * as React from "react";
import { HasRef } from "../../types";
import "./Popper.css";
export declare type Placement = "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "top" | "bottom" | "left" | "right";
export interface PopperCommonProps extends React.HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement> {
    /**
     * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
     */
    placement?: Placement;
    /**
     * Отступ по вспомогательной оси
     */
    offsetSkidding?: number;
    /**
     * Отступ по главной оси
     */
    offsetDistance?: number;
    arrow?: boolean;
    arrowClassName?: string;
    /**
     * Выставлять ширину равной target элементу
     */
    sameWidth?: boolean;
    forcePortal?: boolean;
    onPlacementChange?: (data: {
        placement?: Placement;
    }) => void;
}
export interface PopperProps extends PopperCommonProps {
    targetRef: React.RefObject<HTMLElement>;
}
export declare const Popper: React.FC<PopperProps>;
