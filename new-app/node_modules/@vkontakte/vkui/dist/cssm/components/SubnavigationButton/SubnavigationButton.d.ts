import * as React from "react";
import { TappableProps } from "../Tappable/Tappable";
import "./SubnavigationButton.css";
export interface SubnavigationButtonProps extends Omit<TappableProps, "size"> {
    size?: "m" | "l";
    selected?: boolean;
    /**
     * Размер шрифта. Этим свойством рекомендуется пользоваться, чтобы отрегулировать размер шрифта у кнопок в `<SubnavigationBar mode="fixed" />`
     */
    textLevel?: 1 | 2 | 3;
    /**
     * Рекомендуется использовать только иконки с размером 24
     */
    before?: React.ReactNode;
    /**
     * Рекомендуется использовать только `<Counter size="s" />` или `<Badge />`
     */
    after?: React.ReactNode;
    expandable?: boolean;
}
export declare const SubnavigationButton: React.FC<SubnavigationButtonProps>;
