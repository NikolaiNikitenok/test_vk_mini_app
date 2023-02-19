import * as React from "react";
import { HasRef, HasRootRef } from "../../types";
import "./WriteBar.css";
export interface WriteBarProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLTextAreaElement> {
    /**
     * Содержимое, отображаемое слева от поля ввода.
     */
    before?: React.ReactNode;
    /**
     * Содержимое, отображаемое поверх поля ввода (актуально для iOS)
     */
    inlineAfter?: React.ReactNode;
    /**
     * Содержимое, отображаемое справа от поля ввода
     */
    after?: React.ReactNode;
    /**
     * Вызывается при смене высоты поля ввода
     */
    onHeightChange?: VoidFunction;
    children?: never;
}
export declare const WriteBar: React.FC<WriteBarProps>;
