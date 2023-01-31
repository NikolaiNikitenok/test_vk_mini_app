import * as React from "react";
import "./PopoutWrapper.css";
export interface PopoutWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    hasMask?: boolean;
    fixed?: boolean;
    alignY?: "top" | "center" | "bottom";
    alignX?: "left" | "center" | "right";
    closing?: boolean;
}
export declare const PopoutWrapper: React.FC<PopoutWrapperProps>;
