import * as React from "react";
export declare type ActionType<T> = (event: React.MouseEvent<T>) => void;
export declare type ItemClickHandler<T extends Element = Element> = (action: ActionType<T> | undefined, immediateAction: ActionType<T> | undefined, autoclose: boolean) => (event: React.MouseEvent) => void;
export declare type ActionSheetContextType<T extends Element = Element> = {
    onItemClick?: ItemClickHandler<T>;
    isDesktop?: boolean;
};
export declare const ActionSheetContext: React.Context<ActionSheetContextType<any>>;
