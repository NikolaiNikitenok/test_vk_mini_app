import * as React from "react";
import "./FocusVisible.css";
export declare type FocusVisibleMode = "inside" | "outside";
interface FocusVisibleProps {
    mode: FocusVisibleMode;
}
export declare const FocusVisible: React.FC<FocusVisibleProps>;
export {};
