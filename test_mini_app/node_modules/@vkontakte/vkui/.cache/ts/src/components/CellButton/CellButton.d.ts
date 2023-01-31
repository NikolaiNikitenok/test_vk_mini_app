import * as React from "react";
import { SimpleCellProps } from "../SimpleCell/SimpleCell";
import "./CellButton.css";
export interface CellButtonProps extends SimpleCellProps {
    mode?: "primary" | "danger";
    centered?: boolean;
}
declare const CellButton: React.FC<CellButtonProps>;
export { CellButton };
