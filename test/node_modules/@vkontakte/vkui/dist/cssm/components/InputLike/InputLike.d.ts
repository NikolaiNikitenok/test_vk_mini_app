import * as React from "react";
import { HasRootRef } from "../../types";
import "./InputLike.css";
export interface InputLikeProps extends React.HTMLAttributes<HTMLSpanElement>, HasRootRef<HTMLSpanElement> {
    length: number;
    index: number;
    value?: string;
    onElementSelect?(index: number): void;
}
export declare const InputLike: React.FC<InputLikeProps>;
