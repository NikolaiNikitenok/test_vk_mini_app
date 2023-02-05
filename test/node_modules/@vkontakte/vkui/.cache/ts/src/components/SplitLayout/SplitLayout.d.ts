import * as React from "react";
import { HasRef, HasRootRef } from "../../types";
import "./SplitLayout.css";
export interface SplitLayoutProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLDivElement> {
    /**
     * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
     */
    popout?: React.ReactNode;
    /**
     * Свойство для отрисовки `ModalRoot`.
     */
    modal?: React.ReactNode;
    header?: React.ReactNode;
}
export declare const SplitLayout: React.FC<SplitLayoutProps>;
