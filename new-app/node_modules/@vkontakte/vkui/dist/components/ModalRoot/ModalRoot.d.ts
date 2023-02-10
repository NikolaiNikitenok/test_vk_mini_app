import * as React from "react";
import { HasPlatform } from "../../types";
import { ConfigProviderContextInterface } from "../ConfigProvider/ConfigProviderContext";
import "./ModalRoot.css";
export interface ModalRootProps extends HasPlatform {
    activeModal?: string | null;
    /**
     * Будет вызвано при закрытии активной модалки с её id
     */
    onClose?(modalId: string): void;
    /**
     * @ignore
     */
    configProvider?: ConfigProviderContextInterface;
}
export declare const ModalRootTouch: React.FC<Pick<ModalRootProps, "configProvider" | "onClose" | "activeModal">>;
