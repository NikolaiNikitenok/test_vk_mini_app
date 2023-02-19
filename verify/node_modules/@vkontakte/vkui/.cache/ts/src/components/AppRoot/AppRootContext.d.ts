import * as React from "react";
export interface AppRootContextInterface {
    appRoot?: React.RefObject<HTMLDivElement>;
    portalRoot?: HTMLDivElement | null;
    embedded?: boolean;
    mode?: "partial" | "embedded" | "full";
    keyboardInput?: boolean;
}
export declare const AppRootContext: React.Context<AppRootContextInterface>;
