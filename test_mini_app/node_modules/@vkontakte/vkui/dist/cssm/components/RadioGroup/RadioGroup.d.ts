import * as React from "react";
import "./RadioGroup.css";
export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: "vertical" | "horizontal";
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
