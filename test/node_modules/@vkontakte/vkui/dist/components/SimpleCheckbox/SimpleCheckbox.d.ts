import * as React from "react";
import { HasRef, HasRootRef } from "../../types";
import "./SimpleCheckbox.css";
export interface SimpleCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, HasRootRef<HTMLLabelElement>, HasRef<HTMLInputElement> {
    indeterminate?: boolean;
    defaultIndeterminate?: boolean;
}
export declare const SimpleCheckbox: React.FC<SimpleCheckboxProps>;
