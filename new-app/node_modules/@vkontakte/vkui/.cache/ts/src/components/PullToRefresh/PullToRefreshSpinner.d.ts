import * as React from "react";
import "./PullToRefresh.css";
export interface PullToRefreshSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number;
    strokeWidth?: number;
    on?: boolean;
    progress?: number;
    "aria-label"?: string;
}
declare const _default: React.NamedExoticComponent<PullToRefreshSpinnerProps>;
export default _default;
