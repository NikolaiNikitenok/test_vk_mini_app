import * as React from "react";
import "./WriteBarIcon.css";
export interface WriteBarIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Предустановленные типы кнопок в WriteBar для отрисовки иконки в зависимости от платформы.
     * Если передать валидное значение для этого свойства, `children` игнорируется.
     *
     * - `attach` – иконка прикрепления.
     * - `send` – иконка отправки.
     * - `done` – иконка отправки в режиме редактирования.
     */
    mode?: "attach" | "send" | "done";
    /**
     * Значение счётчика для кнопки. Например, для количества прикреплённых файлов.
     */
    count?: number;
}
export declare const WriteBarIcon: React.FC<WriteBarIconProps>;
