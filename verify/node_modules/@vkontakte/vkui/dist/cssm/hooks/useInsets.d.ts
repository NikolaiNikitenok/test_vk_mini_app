import { Insets as BridgeInsets } from "@vkontakte/vk-bridge";
export interface Insets {
    bottom: BridgeInsets["bottom"] | null;
    top: BridgeInsets["top"] | null;
    left: BridgeInsets["left"] | null;
    right: BridgeInsets["right"] | null;
}
export declare function useInsets(): Insets;
