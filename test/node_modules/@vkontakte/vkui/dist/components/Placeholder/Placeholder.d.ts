import * as React from "react";
import { HasRootRef } from "../../types";
import "./Placeholder.css";
export interface PlaceholderProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    /**
     * Иконка
     */
    icon?: React.ReactNode;
    /**
     * Заголовок плейсхолдера
     */
    header?: React.ReactNode;
    /**
     * Кнопка действия
     */
    action?: React.ReactNode;
    /**
     * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
     */
    stretched?: boolean;
}
declare const Placeholder: React.FC<PlaceholderProps>;
export default Placeholder;
