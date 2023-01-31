import * as React from "react";
import { PopperCommonProps } from "../Popper/Popper";
export interface HoverPopperProps extends PopperCommonProps {
    /**
     * Содержимое тултипа
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
     * Количество миллисекунд, после которых произойдет показ дропдауна
     */
    showDelay?: number;
    /**
     * Количество миллисекунд, после которых произойдет скрытие дропдауна
     */
    hideDelay?: number;
    /**
     * Либо jsx-элемент (div, button, etc.), либо компонент со свойством `getRootRef`, которое применяется к корневому элементу компонента
     */
    children?: React.ReactElement;
}
export declare const HoverPopper: React.FC<HoverPopperProps>;
