import { AppearanceSchemeType, AppearanceType } from "@vkontakte/vk-bridge";
import { PlatformType } from "../lib/platform";
export declare enum Scheme {
    /**
     * @deprecated будет удалено в 5.0.0
     * версия оставлена для совместимости со старыми версиями клиентов
     */
    DEPRECATED_CLIENT_LIGHT = "client_light",
    /**
     * @deprecated будет удалено в 5.0.0
     * версия оставлена для совместимости со старыми версиями клиентов
     */
    DEPRECATED_CLIENT_DARK = "client_dark",
    /**
     * @deprecated будет удалено в 5.0.0
     * версия оставлена для совместимости с vkcom, когда там была только одна схема
     */
    VKCOM = "vkcom",
    BRIGHT_LIGHT = "bright_light",
    SPACE_GRAY = "space_gray",
    VKCOM_LIGHT = "vkcom_light",
    VKCOM_DARK = "vkcom_dark"
}
export declare type AppearanceScheme = AppearanceSchemeType | Scheme.VKCOM | Scheme.VKCOM_DARK | Scheme.VKCOM_LIGHT | "inherit";
export declare enum Appearance {
    DARK = "dark",
    LIGHT = "light"
}
export interface NormalizeSchemeProps {
    platform: PlatformType;
    scheme?: AppearanceScheme;
    appearance?: AppearanceType;
}
export declare function normalizeScheme({ platform, scheme, appearance, }: NormalizeSchemeProps): Scheme | "inherit";
