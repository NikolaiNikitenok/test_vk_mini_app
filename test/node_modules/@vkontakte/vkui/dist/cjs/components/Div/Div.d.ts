import * as React from "react";
import { HasRootRef } from "../../types";
import "./Div.css";
export interface DivProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
}
export declare const Div: React.FC<DivProps>;
