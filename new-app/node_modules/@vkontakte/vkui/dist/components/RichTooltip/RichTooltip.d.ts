import * as React from "react";
import { HoverPopperProps } from "../HoverPopper/HoverPopper";
import "./RichTooltip.css";
export declare type RichTooltipProps = Omit<HoverPopperProps, "arrowClassName">;
export declare const RichTooltip: React.FC<RichTooltipProps>;
