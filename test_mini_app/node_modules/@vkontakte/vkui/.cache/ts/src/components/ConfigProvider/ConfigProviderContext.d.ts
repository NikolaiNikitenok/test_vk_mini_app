import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { PlatformType } from "../../lib/platform";
export declare enum WebviewType {
    VKAPPS = "vkapps",
    INTERNAL = "internal"
}
export interface ConfigProviderContextInterface {
    /**
     * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере
     */
    isWebView: boolean;
    /**
     * Тип вебвью.<br>
     * В случае `WebviewType.VKAPPS` интерфейс будет адаптирован для отображения в вебвью Mini Apps (системные контролы в правой части шапки)
     */
    webviewType: WebviewType.INTERNAL | WebviewType.VKAPPS;
    /**
     * Тип приложения
     */
    app?: string;
    /**
     * Тип цветовой схемы – `light` или `dark`
     */
    appearance?: AppearanceType;
    /**
     * Включена ли анимация переходов между экранами в `Root` и `View`
     */
    transitionMotionEnabled: boolean;
    /**
     * Платформа
     */
    platform: PlatformType;
    hasNewTokens: boolean;
}
export declare const ConfigProviderContext: React.Context<ConfigProviderContextInterface>;
