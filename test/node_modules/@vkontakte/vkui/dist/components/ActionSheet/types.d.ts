import * as React from "react";
import { FocusTrapProps } from "../FocusTrap/FocusTrap";
export declare type PopupDirection = "top" | "bottom" | ((elRef: React.RefObject<HTMLDivElement>) => "top" | "bottom");
export declare type ToggleRef = Element | null | undefined | React.RefObject<Element>;
export interface SharedDropdownProps extends React.AllHTMLAttributes<HTMLElement>, FocusTrapProps {
    closing: boolean;
    toggleRef: ToggleRef;
    popupDirection: PopupDirection;
}
