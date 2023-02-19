import * as React from "react";
import "./Gradient.css";
export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: "tint" | "white" | "black";
    to?: "top" | "bottom";
}
export declare const Gradient: React.FC<GradientProps>;
