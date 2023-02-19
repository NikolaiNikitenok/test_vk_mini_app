import * as React from "react";
export interface ScrollContextInterface {
    getScroll(): {
        x: number;
        y: number;
    };
    scrollTo(x?: number, y?: number): void;
}
export declare const ScrollContext: React.Context<ScrollContextInterface>;
export declare const globalScrollController: (window: Window | undefined, document: HTMLDocument | undefined) => {
    getScroll: () => {
        x: number;
        y: number;
    };
    scrollTo: (x?: number, y?: number) => void;
};
export declare const elementScrollController: (elRef: React.RefObject<HTMLElement>) => {
    getScroll: () => {
        x: number;
        y: number;
    };
    scrollTo: (x?: number, y?: number) => void;
};
