import * as React from "react";
import { SizeType, ViewHeight, ViewWidth, AdaptivityContextInterface, AdaptivityProps, SizeProps } from "../components/AdaptivityProvider/AdaptivityContext";
export { SizeType, ViewWidth, ViewHeight };
export type { AdaptivityProps };
interface Config {
    sizeX?: boolean;
    sizeY?: boolean;
    viewWidth?: boolean;
    viewHeight?: boolean;
    hasMouse?: boolean;
    deviceHasHover?: boolean;
}
export declare function withAdaptivity<T extends AdaptivityProps>(TargetComponent: React.ComponentType<T>, config: Config): React.FC<Omit<T, keyof AdaptivityContextInterface> & SizeProps>;
