import * as React from "react";
declare type ChildrenElement<T> = React.ReactElement<{
    getRootRef?: React.Ref<T>;
}>;
export declare const usePatchChildrenRef: <T = HTMLElement>(children?: ChildrenElement<T> | undefined) => [React.MutableRefObject<T | null>, ChildrenElement<T> | undefined];
export {};
