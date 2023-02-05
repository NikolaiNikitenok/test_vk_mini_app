import * as React from "react";
import { HasRootRef } from "../../types";
import "./SliderSwitch.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
    active?: boolean;
    hovered?: boolean;
}
/**
 * @deprecated Этот компонент устарел и будет удален в 5.0.0.
 */
export declare const SliderSwitchButton: React.FunctionComponent<ButtonProps>;
