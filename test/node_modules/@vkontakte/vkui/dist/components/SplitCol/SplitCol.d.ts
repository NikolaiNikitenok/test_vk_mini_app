import * as React from "react";
import "./SplitCol.css";
export interface SplitColContextProps {
    colRef: React.RefObject<HTMLDivElement> | null;
    animate: boolean;
}
export declare const SplitColContext: React.Context<SplitColContextProps>;
export interface SplitColProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
    /**
     * Если false, то переходы между Panel происходят без анимации
     */
    animate?: boolean;
    /**
     * Если true, то добавляются боковые отступы фиксированной величины
     */
    spaced?: boolean;
    fixed?: boolean;
}
export declare const SplitCol: React.FC<SplitColProps>;
