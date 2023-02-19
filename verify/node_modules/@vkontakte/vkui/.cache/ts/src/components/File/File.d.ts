import * as React from "react";
import { VKUIButtonProps } from "../Button/Button";
import { HasRef, HasRootRef } from "../../types";
import "./File.css";
export interface FileProps extends Omit<VKUIButtonProps, "size" | "type">, Omit<React.InputHTMLAttributes<HTMLInputElement>, "onClick" | "type">, Pick<React.HTMLAttributes<HTMLElement>, "onClick">, HasRef<HTMLInputElement>, HasRootRef<HTMLElement> {
    controlSize?: VKUIButtonProps["size"];
}
declare const File: React.FunctionComponent<FileProps>;
export default File;
