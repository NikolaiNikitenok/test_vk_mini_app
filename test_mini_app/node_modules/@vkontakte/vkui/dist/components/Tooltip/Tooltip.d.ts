import * as React from "react";
import "./Tooltip.css";
export interface TooltipProps {
    /**
     * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
     * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
     * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
     */
    children: React.ReactElement;
    mode?: "accent" | "light";
    /**
     * Если передан `false`, то рисуется просто `children`.
     */
    isShown?: boolean;
    /**
     * Текст тултипа.
     */
    text?: React.ReactNode;
    /**
     * Заголовок тултипа.
     */
    header?: React.ReactNode;
    /**
     * Положение по горизонтали (прижатие к левому или правому краю `children`).
     * Если не задано, позиция по горизонтали определятся автоматически
     */
    alignX?: "center" | "left" | "right";
    /**
     * Положение по вертикали (расположение над или под `children`).
     * Если не задано, позиция по вертикали определятся автоматически
     */
    alignY?: "top" | "bottom";
    /**
     * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
     */
    offsetX?: number;
    /**
     * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
     */
    offsetY?: number;
    /**
     * Сдвиг стрелочки относительно центра дочернего элемента.
     */
    cornerOffset?: number;
    /**
     * Сдвиг стрелочки относительно ширины тултипа
     */
    cornerAbsoluteOffset?: number;
    /**
     * Callback, который вызывается при клике по любому месту в пределах экрана.
     */
    onClose?: () => void;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
