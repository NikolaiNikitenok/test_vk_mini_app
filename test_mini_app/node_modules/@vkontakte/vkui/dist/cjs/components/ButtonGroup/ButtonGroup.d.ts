import * as React from "react";
import type { HasRootRef } from "../../types";
import "./ButtonGroup.css";
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    /**
     * Задает расположение элементов внутри группы, вертикальное или горизонтальное.
     */
    mode?: "vertical" | "horizontal";
    /**
     * Выставляет в зависимости от `mode` отступ по вертикали или горизонтали.
     */
    gap?: "none" | "space" | "s" | "m";
    /**
     * Растягивает компонент на всю ширину контейнера.
     *
     * Note: Для потомков соответствующее поведение нужно определять самостоятельно, где это необходимо.
     */
    stretched?: boolean;
}
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
