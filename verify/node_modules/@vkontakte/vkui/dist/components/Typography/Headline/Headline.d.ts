import * as React from "react";
import { HasComponent } from "../../../types";
import "./Headline.css";
export interface HeadlineProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    weight: "regular" | "medium" | "semibold";
}
declare const Headline: React.FC<HeadlineProps>;
export default Headline;
