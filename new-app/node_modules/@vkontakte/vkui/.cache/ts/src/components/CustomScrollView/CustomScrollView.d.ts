import * as React from "react";
import { DOMProps } from "../../lib/dom";
import "./CustomScrollView.css";
interface Props extends DOMProps {
    windowResize?: boolean;
    boxRef?: React.Ref<HTMLDivElement>;
    className?: HTMLDivElement["className"];
}
declare const _default: React.ComponentType<Props>;
export default _default;
