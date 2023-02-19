import * as React from "react";
import "./FormStatus.css";
export interface FormStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: "default" | "error";
    header?: React.ReactNode;
}
export declare const FormStatus: React.FunctionComponent<FormStatusProps>;
