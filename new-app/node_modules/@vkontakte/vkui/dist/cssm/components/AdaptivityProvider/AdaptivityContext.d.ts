import * as React from "react";
export declare enum SizeType {
    COMPACT = "compact",
    REGULAR = "regular"
}
export declare enum ViewWidth {
    SMALL_MOBILE = 1,
    MOBILE = 2,
    SMALL_TABLET = 3,
    TABLET = 4,
    DESKTOP = 5
}
export declare enum ViewHeight {
    EXTRA_SMALL = 1,
    SMALL = 2,
    MEDIUM = 3
}
export interface SizeProps {
    sizeX?: SizeType;
    sizeY?: SizeType;
}
export interface AdaptivityProps extends SizeProps {
    /**
     * @ignore
     */
    viewWidth?: ViewWidth;
    /**
     * @ignore
     */
    viewHeight?: ViewHeight;
    /**
     * @ignore
     */
    hasMouse?: boolean;
    /**
     * @ignore
     */
    deviceHasHover?: boolean;
}
export interface AdaptivityContextInterface extends SizeProps {
    viewWidth: ViewWidth;
    viewHeight: ViewHeight;
    hasMouse: boolean;
    deviceHasHover: boolean;
}
export declare const AdaptivityContext: React.Context<AdaptivityContextInterface>;
