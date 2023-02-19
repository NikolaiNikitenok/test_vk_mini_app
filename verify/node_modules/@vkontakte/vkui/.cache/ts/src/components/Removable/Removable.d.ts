import * as React from "react";
import { HasRootRef } from "../../types";
import "./Removable.css";
export interface RemovableProps {
    /**
     * iOS only. Текст в выезжающей кнопке для удаления ячейки.
     */
    removePlaceholder?: React.ReactNode;
    /**
     * Коллбэк срабатывает при клике на контрол удаления.
     */
    onRemove?: (e: React.MouseEvent, rootEl?: HTMLElement) => void;
}
interface RemovableOwnProps extends React.AllHTMLAttributes<HTMLElement>, RemovableProps, HasRootRef<HTMLDivElement> {
    /**
     * Расположение кнопки удаления.
     */
    align?: "start" | "center";
}
export declare const Removable: React.FC<RemovableOwnProps>;
export {};
