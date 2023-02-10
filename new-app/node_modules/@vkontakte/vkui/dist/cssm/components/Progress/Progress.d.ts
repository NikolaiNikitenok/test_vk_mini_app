import * as React from "react";
import { HasRootRef } from "../../types";
import "./Progress.css";
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    value?: number;
}
declare const Progress: React.FC<ProgressProps>;
export default Progress;
