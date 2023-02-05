import * as React from "react";
import "./Chip.css";
declare type ChipValue = string | number;
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    value: ChipValue;
    option?: {
        value?: ChipValue;
    };
    onRemove?: (event?: React.MouseEvent, value?: ChipValue) => void;
    removable?: boolean;
    removeAriaLabel?: string;
    before?: React.ReactNode;
    after?: React.ReactNode;
}
export declare const Chip: React.FC<ChipProps>;
export {};
