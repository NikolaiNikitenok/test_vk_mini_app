import * as React from "react";
export declare type ImgOnlyAttributes = {
    [index in Exclude<keyof React.ImgHTMLAttributes<HTMLImageElement>, keyof React.HTMLAttributes<HTMLImageElement>>]: React.ImgHTMLAttributes<HTMLImageElement>[index];
};
export declare function isNumeric(value: any): boolean;
export declare function isFunction(value: any): value is (...args: any[]) => any;
export declare function debounce<A extends any[]>(fn: (...args: A) => void, delay: number): (...args: A) => void;
export declare function leadingZero(val: number): string;
export declare function hasReactNode(value: React.ReactNode): boolean;
export declare function isPrimitiveReactNode(node: React.ReactNode): boolean;
export declare function setRef<T>(element: T, ref?: React.Ref<T>): void;
export declare function multiRef<T>(...refs: Array<React.Ref<T> | undefined>): React.RefObject<T>;
export declare const noop: () => void;
export declare function getTitleFromChildren(children: React.ReactNode): string;
export declare const generateRandomId: () => string;
export declare const stopPropagation: <T extends React.SyntheticEvent<Element, Event>>(event: T) => void;
