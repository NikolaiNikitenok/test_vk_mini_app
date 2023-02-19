import * as React from "react";
import { HasRef } from "../../types";
import "./VisuallyHiddenInput.css";
export interface VisuallyHiddenInputProps extends React.InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement> {
}
/**
 * @description
 * Обертка над обычным `<input/>`; дает
 * скрыть его визуально и оставить
 * доступным для ассистивных технологий.
 */
export declare const VisuallyHiddenInput: React.FC<VisuallyHiddenInputProps>;
