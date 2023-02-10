import * as React from "react";
export declare const FOCUSABLE_ELEMENTS_LIST: string[];
export declare enum Keys {
    ENTER = "Enter",
    SPACE = "Space",
    TAB = "Tab",
    ESCAPE = "Escape"
}
export declare function pressedKey(e: KeyboardEvent | React.KeyboardEvent<HTMLElement>): Keys | null;
export declare function shouldTriggerClickOnEnterOrSpace(e: KeyboardEvent | React.KeyboardEvent<HTMLElement>): boolean;
