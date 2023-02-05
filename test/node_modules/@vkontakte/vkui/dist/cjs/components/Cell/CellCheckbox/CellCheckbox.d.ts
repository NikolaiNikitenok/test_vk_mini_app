import * as React from "react";
import { CellProps } from "../Cell";
import "./CellCheckbox.css";
export declare type CellCheckboxProps = Pick<CellProps, "defaultChecked" | "checked"> & React.InputHTMLAttributes<HTMLInputElement>;
export declare const CellCheckbox: React.FC<CellCheckboxProps>;
