import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
export interface AppearanceProviderProps {
    appearance?: AppearanceType;
}
export declare const generateVKUITokensClassName: (platform: string, appearance: string) => string;
export declare const AppearanceProvider: React.FC<AppearanceProviderProps>;
