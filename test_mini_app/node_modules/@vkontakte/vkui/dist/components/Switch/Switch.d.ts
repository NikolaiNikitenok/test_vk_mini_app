import * as React from "react";
import { HasRootRef } from "../../types";
import { VisuallyHiddenInputProps } from "../VisuallyHiddenInput/VisuallyHiddenInput";
import "./Switch.css";
export interface SwitchProps extends VisuallyHiddenInputProps, HasRootRef<HTMLLabelElement> {
}
export declare const Switch: React.FC<SwitchProps>;
