import * as React from "react";
import { HasComponent, HasRef, HasRootRef } from "../../types";
import "./HorizontalCell.css";
export interface HorizontalCellProps extends React.AnchorHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLDivElement>, HasComponent {
    size?: "s" | "m" | "l";
    header?: React.ReactNode;
    subtitle?: React.ReactNode;
    disabled?: boolean;
}
export declare const HorizontalCell: React.FC<HorizontalCellProps>;
