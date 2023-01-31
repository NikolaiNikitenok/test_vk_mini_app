import * as React from "react";
import { HasRef, HasRootRef } from "../../types";
import "./Avatar.css";
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLImageElement> {
    /**
     * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
     */
    size?: number;
    mode?: "default" | "image" | "app";
    shadow?: boolean;
    badge?: "online" | "online-mobile" | JSX.Element;
    overlayIcon?: JSX.Element;
    overlayMode?: "dark" | "light";
    /**
     * Поведение показа overlay: "hover" - при наведении, "always" - всегда
     */
    overlayAction?: "hover" | "always";
}
export declare const AVATAR_DEFAULT_SIZE = 48;
export declare const AVATAR_DEFAULT_SHADOW = true;
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
