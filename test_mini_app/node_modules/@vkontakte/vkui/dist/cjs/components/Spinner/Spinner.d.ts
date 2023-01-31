import * as React from "react";
import "./Spinner.css";
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: "small" | "regular" | "large" | "medium";
}
declare const _default: React.NamedExoticComponent<SpinnerProps>;
export default _default;
