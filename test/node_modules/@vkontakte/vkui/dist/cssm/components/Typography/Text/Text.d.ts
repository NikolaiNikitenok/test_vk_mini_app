import * as React from "react";
import { HasComponent, HasRootRef } from "../../../types";
import "./Text.css";
export interface TextProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasComponent {
    weight: "regular" | "medium" | "semibold";
}
declare const Text: React.FC<TextProps>;
export default Text;
