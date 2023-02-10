import * as React from "react";
import { PopperCommonProps } from "../Popper/Popper";
export interface ClickPopperProps extends PopperCommonProps {
    /**
     * Содержимое `ClickPopper`
     */
    content?: React.ReactNode;
    /**
     * Если передан, то тултип будет показан/скрыт в зависимости от значения свойства
     */
    shown?: boolean;
    /**
     * Вызывается при каждом изменении видимости тултипа
     */
    onShownChange?: (shown: boolean) => void;
    /**
     * Либо jsx-элемент (div, button, etc.), либо компонент со свойством `getRootRef`, которое применяется к корневому элемнету компонента
     */
    children?: React.ReactElement;
}
export declare const ClickPopper: React.FC<ClickPopperProps>;
