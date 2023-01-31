import * as React from "react";
import { NavIdProps } from "../../lib/getNavId";
import "./Root.css";
export interface RootProps extends React.HTMLAttributes<HTMLDivElement>, NavIdProps {
    activeView: string;
    onTransition?(params: {
        isBack: boolean;
        from: string;
        to: string;
    }): void;
    /**
     * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
     *
     * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
     */
    popout?: React.ReactNode;
    /**
     * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
     *
     * Свойство для отрисовки `ModalRoot`.
     */
    modal?: React.ReactNode;
}
export interface RootState {
    activeView: string;
    transition: boolean;
    isBack?: boolean;
    prevView?: string;
}
declare const Root: React.FC<RootProps>;
export default Root;
