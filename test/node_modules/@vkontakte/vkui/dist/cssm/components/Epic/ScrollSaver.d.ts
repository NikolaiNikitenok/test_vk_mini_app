import * as React from "react";
export interface ScrollSaverProps {
    initialScroll?: number;
    saveScroll: (scroll: number) => any;
}
export declare const ScrollSaver: React.FC<ScrollSaverProps>;
