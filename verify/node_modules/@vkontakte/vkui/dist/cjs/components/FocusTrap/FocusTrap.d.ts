import * as React from "react";
import { HasComponent, HasRootRef } from "../../types";
export interface FocusTrapProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasComponent {
    onClose?: (props?: any) => void;
    restoreFocus?: boolean;
    timeout?: number;
}
export declare const FocusTrap: React.FC<FocusTrapProps>;
