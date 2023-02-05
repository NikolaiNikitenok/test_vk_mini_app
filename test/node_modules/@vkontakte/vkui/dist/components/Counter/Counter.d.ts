import * as React from "react";
import "./Counter.css";
export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
     */
    mode?: "secondary" | "primary" | "prominent";
    size?: "s" | "m";
}
declare const _default: React.NamedExoticComponent<CounterProps>;
export default _default;
