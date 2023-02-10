import * as React from "react";
import { HasRootRef } from "../../types";
import "./Card.css";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    mode?: "tint" | "shadow" | "outline";
}
export declare const Card: React.FC<CardProps>;
