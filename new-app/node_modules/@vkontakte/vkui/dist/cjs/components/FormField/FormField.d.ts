import * as React from "react";
import { HasComponent, HasRootRef } from "../../types";
import "./FormField.css";
export interface FormFieldProps {
    /**
     * Иконка 12|16|20|24|28 или `IconButton`.
     */
    after?: React.ReactNode;
}
interface FormFieldOwnProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasComponent, FormFieldProps {
    disabled?: boolean;
}
export declare const FormField: React.FC<FormFieldOwnProps>;
export {};
