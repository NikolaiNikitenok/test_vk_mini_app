import * as React from "react";
import "./HorizontalScrollArrow.css";
export interface HorizontalScrollArrowProps {
    onClick: () => void;
    direction: "left" | "right";
}
declare const HorizontalScrollArrow: React.FC<HorizontalScrollArrowProps>;
export default HorizontalScrollArrow;
