import * as React from "react";
import "./PanelHeaderContext.css";
export interface PanelHeaderContextProps extends React.HTMLAttributes<HTMLDivElement> {
    opened: boolean;
    onClose: VoidFunction;
}
export declare const PanelHeaderContext: React.FC<PanelHeaderContextProps>;
