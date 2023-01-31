import { BrowserInfo } from "./browser";
export declare enum Platform {
    ANDROID = "android",
    IOS = "ios",
    VKCOM = "vkcom"
}
export declare const ANDROID = Platform.ANDROID;
export declare const IOS = Platform.IOS;
export declare const VKCOM = Platform.VKCOM;
export declare type PlatformType = Platform.ANDROID | Platform.IOS | Platform.VKCOM | string;
export declare function platform(browserInfo?: BrowserInfo): PlatformType;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export declare const IS_PLATFORM_IOS: boolean;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export declare const IS_PLATFORM_ANDROID: boolean;
