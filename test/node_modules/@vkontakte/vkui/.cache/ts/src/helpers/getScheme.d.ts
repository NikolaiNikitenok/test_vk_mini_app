import { AppearanceType } from "@vkontakte/vk-bridge";
import { PlatformType } from "../lib/platform";
import { Scheme } from "./scheme";
export interface GetSchemeProps {
    platform?: PlatformType;
    appearance: AppearanceType;
}
export declare function getScheme({ platform, appearance }: GetSchemeProps): Scheme;
