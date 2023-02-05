import * as React from "react";
import "./Badge.css";
export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
    mode: "new" | "prominent";
}
export declare const Badge: React.FunctionComponent<BadgeProps>;
