import * as React from "react";
import { PopupDirection, ToggleRef } from "./types";
import "./ActionSheet.css";
export interface ActionSheetProps extends React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    text?: React.ReactNode;
    /**
     * Закрыть попап по клику снаружи. В v5 будет обязательным.
     */
    onClose?: VoidFunction;
    /**
     * Элемент, рядом с которым вылезает попап на десктопе.
     * Лучше передавать RefObject c current.
     * В v5 будет обязательным.
     */
    toggleRef?: ToggleRef;
    /**
     * Направление на десктопе
     */
    popupDirection?: PopupDirection;
    /**
     * Только iOS. В v5 будет обязательным.
     */
    iosCloseItem?: React.ReactNode;
}
export declare const ActionSheet: React.FC<ActionSheetProps>;
