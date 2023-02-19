import * as React from "react";
import { HoverPopperProps } from "../HoverPopper/HoverPopper";
import "./TextTooltip.css";
export interface TextTooltipProps extends Omit<HoverPopperProps, "arrow" | "arrowClassName" | "content"> {
    /**
     * Текст тултипа
     */
    text?: React.ReactNode;
    /**
     * Заголовок тултипа
     */
    header?: React.ReactNode;
}
export declare const TextTooltip: React.FC<TextTooltipProps>;
