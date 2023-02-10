import * as React from "react";
import { HorizontalScrollProps } from "../HorizontalScroll/HorizontalScroll";
import "./SubnavigationBar.css";
export interface SubnavigationBarProps extends React.HTMLAttributes<HTMLDivElement>, Pick<HorizontalScrollProps, "showArrows" | "getScrollToLeft" | "getScrollToRight" | "scrollAnimationDuration"> {
    mode?: "fixed" | "overflow";
}
export declare const SubnavigationBar: React.FC<SubnavigationBarProps>;
