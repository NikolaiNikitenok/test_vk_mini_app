import * as React from "react";
import { AvatarProps } from "../Avatar/Avatar";
import { HasRootRef } from "../../types";
import "./GridAvatar.css";
export interface GridAvatarProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, Pick<AvatarProps, "size" | "shadow" | "badge"> {
    src?: string[];
}
export declare const GridAvatar: React.FC<GridAvatarProps>;
