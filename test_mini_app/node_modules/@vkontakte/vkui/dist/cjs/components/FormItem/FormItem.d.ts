import * as React from "react";
import { HasComponent, HasRootRef } from "../../types";
import { RemovableProps } from "../Removable/Removable";
import "./FormItem.css";
export interface FormItemProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasComponent, RemovableProps {
    top?: React.ReactNode;
    bottom?: React.ReactNode;
    status?: "default" | "error" | "valid";
    /**
     * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
     */
    removable?: boolean;
}
export declare const FormItem: React.FC<FormItemProps>;
