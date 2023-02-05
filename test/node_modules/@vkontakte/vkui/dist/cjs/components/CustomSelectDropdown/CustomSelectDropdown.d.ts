import * as React from "react";
import { Placement } from "../Popper/Popper";
import { HasRef } from "../../types";
import "./CustomSelectDropdown.css";
export interface CustomSelectDropdownProps extends React.HTMLAttributes<HTMLElement>, HasRef<HTMLDivElement> {
    targetRef: React.RefObject<HTMLElement>;
    placement?: Placement;
    scrollBoxRef?: React.Ref<HTMLDivElement>;
    fetching?: boolean;
    offsetDistance?: number;
    sameWidth?: boolean;
    forcePortal?: boolean;
    onPlacementChange?: (placement?: Placement) => void;
}
export declare const CustomSelectDropdown: React.FC<CustomSelectDropdownProps>;
