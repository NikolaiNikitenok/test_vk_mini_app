import * as React from "react";
import { AdaptivityContextInterface, AdaptivityProps } from "../AdaptivityProvider/AdaptivityContext";
export interface ModalRootProps extends AdaptivityProps {
    activeModal?: string | null;
    /**
     * Будет вызвано при закрытии активной модалки с её id
     */
    onClose?: (modalId: string) => void;
}
export declare const ModalRoot: React.FC<Pick<ModalRootProps & AdaptivityContextInterface, "onClose" | "activeModal"> & import("../AdaptivityProvider/AdaptivityContext").SizeProps>;
