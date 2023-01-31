import * as React from "react";
import "./Spacing.css";
export interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Высота спэйсинга
     */
    size?: number;
    /**
     * Настройка положения сепаратора:
     *
     * - separator=false (default) - без сепаратора
     * - separator=true | separator='center' - сепаратор располагается по середине
     * - separator='top'
     * - separator='bottom'
     */
    separator?: boolean | "top" | "bottom" | "center";
}
export declare const Spacing: React.FC<SpacingProps>;
