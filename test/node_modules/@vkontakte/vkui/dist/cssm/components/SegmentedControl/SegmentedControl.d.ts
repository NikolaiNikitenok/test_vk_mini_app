import * as React from "react";
import { HasRootRef } from "../../types";
import "./SegmentedControl.css";
export declare type SegmentedControlValue = string | number | undefined;
export interface SegmentedControlOptionInterface extends Omit<React.HTMLAttributes<HTMLElement>, "label"> {
    label: React.ReactChild;
    value: SegmentedControlValue;
}
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, HasRootRef<HTMLDivElement> {
    options: SegmentedControlOptionInterface[];
    size?: "m" | "l";
    name?: string;
    onChange?: (value: SegmentedControlValue) => void;
    value?: SegmentedControlValue;
    defaultValue?: SegmentedControlValue;
}
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
